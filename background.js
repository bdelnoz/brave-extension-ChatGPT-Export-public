/*
 * ChatGPT Export - background.js
 * Version: v6.0.0
 * Developer: @NoXoZ.be
 */
'use strict';

const VERSION = '6.0.0';
const SUPPORTED = /^https:\/\/(chatgpt\.com|chat\.openai\.com)\//;
const liveProjectJobs = new Map();

function isSupported(url) {
  return typeof url === 'string' && SUPPORTED.test(url);
}

function sleep(ms) { return new Promise((resolve) => setTimeout(resolve, ms)); }

async function inject(tabId) {
  await chrome.scripting.insertCSS({ target: { tabId }, files: ['export-style.css'] });
  await chrome.scripting.executeScript({ target: { tabId }, files: ['content-export.js'] });
}

async function send(tabId, message) {
  return chrome.tabs.sendMessage(tabId, message);
}

async function sendWithRetry(tabId, message, attempts = 80, delayMs = 250) {
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await send(tabId, message);
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await sleep(delayMs);
    }
  }
  throw lastError || new Error('CONTENT_SCRIPT_NOT_READY');
}

async function toggle(tab) {
  if (!tab || !tab.id || !isSupported(tab.url || '')) return;
  try {
    await send(tab.id, { type: 'CGX_ICON_TOGGLE', version: VERSION });
  } catch (error) {
    try {
      await inject(tab.id);
      await sendWithRetry(tab.id, { type: 'CGX_ICON_SHOW', version: VERSION });
    } catch (innerError) {
      console.error('[ChatGPT Export] toggle failed:', innerError);
    }
  }
}

async function refreshChatGPTTabsAfterReload() {
  let tabs = [];
  try {
    tabs = await chrome.tabs.query({ url: ['https://chatgpt.com/*', 'https://chat.openai.com/*'] });
  } catch (error) {
    console.error('[ChatGPT Export] tabs query failed:', error);
    return;
  }
  for (const tab of tabs) {
    if (!tab || !tab.id) continue;
    try { await chrome.tabs.reload(tab.id); } catch (error) { console.error('[ChatGPT Export] reload tab failed:', error); }
  }
}

function waitForTabComplete(tabId, timeoutMs = 60000) {
  return new Promise((resolve, reject) => {
    let done = false;
    const timer = setTimeout(() => finish(new Error('TAB_LOAD_TIMEOUT')), timeoutMs);
    function finish(error) {
      if (done) return;
      done = true;
      clearTimeout(timer);
      chrome.tabs.onUpdated.removeListener(onUpdated);
      if (error) reject(error); else resolve();
    }
    function onUpdated(id, info) {
      if (id === tabId && info.status === 'complete') finish();
    }
    chrome.tabs.onUpdated.addListener(onUpdated);
    chrome.tabs.get(tabId).then((tab) => {
      if (tab?.status === 'complete') finish();
    }).catch((error) => finish(error));
  });
}

async function navigateTab(tabId, url, timeoutSeconds) {
  const timeoutMs = Math.max(20000, Math.min(120000, Number(timeoutSeconds || 600) * 1000));
  const tab = await chrome.tabs.update(tabId, { url, active: true });
  if (!tab) throw new Error('TAB_NAVIGATION_FAILED');
  await waitForTabComplete(tabId, timeoutMs);
}

function statsFromResults(results) {
  return results.reduce((acc, r) => {
    acc.totalMessages += Number(r?.totalMessages || 0);
    acc.userMessages += Number(r?.userMessages || 0);
    acc.agentMessages += Number(r?.agentMessages || 0);
    return acc;
  }, { totalMessages: 0, userMessages: 0, agentMessages: 0 });
}

async function sendProgress(job, extra = {}) {
  const stats = statsFromResults(job.results);
  const payload = Object.assign({
    type: 'CGX_PROJECT_EXPORT_PROGRESS',
    projectName: job.projectName,
    total: job.chats.length,
    completed: job.results.length,
    failed: job.failures.length,
    totalMessages: stats.totalMessages,
    userMessages: stats.userMessages,
    agentMessages: stats.agentMessages
  }, extra);
  try { await sendWithRetry(job.tabId, payload, 40, 250); } catch { /* progress is best-effort */ }
}

async function returnAndFinalize(job, finalError = '') {
  let returnError = finalError;
  try {
    await navigateTab(job.tabId, job.returnUrl, job.timeoutSeconds);
  } catch (error) {
    returnError = returnError || String(error?.message || error);
  }

  const payload = {
    type: 'CGX_PROJECT_EXPORT_COMPLETE',
    projectName: job.projectName,
    total: job.chats.length,
    results: job.results,
    failures: job.failures,
    cancelled: Boolean(job.cancelled),
    error: returnError,
    stamp: job.stamp,
    zipFilename: job.zipFilename,
    exportedAt: new Date().toISOString(),
    logLines: job.logLines.slice(-80)
  };

  if (!returnError || isSupported(job.returnUrl)) {
    try { await sendWithRetry(job.tabId, payload, 80, 250); } catch (error) {
      console.error('[ChatGPT Export] final project delivery failed:', error);
    }
  }
}

async function runLiveProjectExport(job) {
  let fatalError = '';
  try {
    for (let i = 0; i < job.chats.length; i += 1) {
      if (job.cancelled) break;
      const chat = job.chats[i];
      const titleHint = String(chat?.titleHint || `chat ${i + 1}`);
      job.logLines.push(`chat start ${i + 1}/${job.chats.length} ${chat.url}`);
      try {
        await navigateTab(job.tabId, chat.url, job.timeoutSeconds);
        if (job.cancelled) break;
        await sendProgress(job, {
          phase: 'start',
          index: i + 1,
          url: chat.url,
          titleHint
        });
        const result = await sendWithRetry(job.tabId, {
          type: 'CGX_EXPORT_CHAT_DATA_FOR_PROJECT',
          projectName: job.projectName,
          titleHint,
          readyTimeoutMs: 20000,
          liveProject: true,
          index: i + 1,
          total: job.chats.length
        }, 100, 250);
        if (job.cancelled) break;
        if (!result || result.ok === false) throw new Error(result?.error || 'CHAT_EXPORT_FAILED');
        job.results.push(result);
        job.logLines.push(`chat done ${i + 1}/${job.chats.length} ${result.chatTitle || titleHint} messages=${result.totalMessages || 0}`);
        await sendProgress(job, {
          phase: 'done',
          index: i + 1,
          url: chat.url,
          titleHint,
          chatTitle: result.chatTitle || titleHint
        });
      } catch (error) {
        const failure = { url: chat.url, titleHint, error: String(error?.message || error) };
        job.failures.push(failure);
        job.logLines.push(`chat error ${i + 1}/${job.chats.length} ${failure.error}`);
        if (job.cancelled) break;
        try {
          await sendProgress(job, {
            phase: 'error',
            index: i + 1,
            url: chat.url,
            titleHint
          });
        } catch { /* ignored */ }
      }
      if (!job.cancelled) await sleep(350);
    }
  } catch (error) {
    fatalError = String(error?.message || error);
    job.logLines.push(`fatal ${fatalError}`);
  } finally {
    await returnAndFinalize(job, fatalError);
    liveProjectJobs.delete(job.tabId);
  }
}


function isAllowedAttachmentUrl(value) {
  try {
    const u = new URL(String(value || ''));
    if (u.protocol !== 'https:') return false;
    const host = u.hostname.toLowerCase();
    return host === 'chatgpt.com'
      || host === 'chat.openai.com'
      || host.endsWith('.oaiusercontent.com')
      || host.endsWith('.openai.com');
  } catch {
    return false;
  }
}

function bytesToBase64(bytes) {
  const chunk = 0x8000;
  let binary = '';
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, Math.min(i + chunk, bytes.length)));
  }
  return btoa(binary);
}

async function fetchAttachmentData(url) {
  if (!isAllowedAttachmentUrl(url)) throw new Error('ATTACHMENT_URL_NOT_ALLOWED');
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    redirect: 'follow',
    cache: 'no-store'
  });
  if (!response.ok) throw new Error(`ATTACHMENT_HTTP_${response.status}`);
  const bytes = new Uint8Array(await response.arrayBuffer());
  return {
    ok: true,
    base64: bytesToBase64(bytes),
    size: bytes.length,
    contentType: response.headers.get('content-type') || '',
    finalUrl: response.url || url,
    version: VERSION
  };
}

chrome.action.onClicked.addListener(toggle);

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (!message || typeof message !== 'object') return false;

  if (message.type === 'CGX_START_LIVE_PROJECT_EXPORT') {
    const tabId = sender?.tab?.id;
    if (!tabId) {
      sendResponse({ ok: false, error: 'NO_ACTIVE_TAB', version: VERSION });
      return false;
    }
    if (liveProjectJobs.has(tabId)) {
      sendResponse({ ok: false, error: 'PROJECT_EXPORT_ALREADY_RUNNING', version: VERSION });
      return false;
    }
    const chats = Array.isArray(message.chats) ? message.chats.filter((c) => c && isSupported(c.url)) : [];
    if (!chats.length) {
      sendResponse({ ok: false, error: 'NO_PROJECT_CHATS_FOUND', version: VERSION });
      return false;
    }
    const job = {
      tabId,
      chats,
      projectName: String(message.projectName || 'Project'),
      returnUrl: String(message.returnUrl || sender.tab.url || ''),
      timeoutSeconds: Number(message.timeoutSeconds || 600),
      stamp: String(message.stamp || ''),
      zipFilename: String(message.zipFilename || ''),
      results: [],
      failures: [],
      logLines: [],
      cancelled: false
    };
    liveProjectJobs.set(tabId, job);
    sendResponse({ ok: true, total: chats.length, version: VERSION });
    setTimeout(() => runLiveProjectExport(job), 150);
    return false;
  }

  if (message.type === 'CGX_FETCH_ATTACHMENT_DATA') {
    fetchAttachmentData(message.url)
      .then((payload) => sendResponse(payload))
      .catch((error) => sendResponse({ ok: false, error: String(error?.message || error), version: VERSION }));
    return true;
  }

  if (message.type === 'CGX_CANCEL_LIVE_PROJECT_EXPORT') {
    const tabId = sender?.tab?.id;
    const job = tabId ? liveProjectJobs.get(tabId) : null;
    if (job) {
      job.cancelled = true;
      job.logLines.push('cancel requested by user');
    }
    sendResponse({ ok: true, cancelled: Boolean(job), version: VERSION });
    return false;
  }

  if (message.type === 'CGX_RELOAD_EXTENSION') {
    sendResponse({ ok: true, version: VERSION });
    setTimeout(() => chrome.runtime.reload(), 150);
    return false;
  }

  if (message.type === 'CGX_REFRESH_CHATGPT_TABS') {
    refreshChatGPTTabsAfterReload().then(() => sendResponse({ ok: true, version: VERSION }));
    return true;
  }

  return false;
});

setTimeout(() => {
  chrome.storage.local.get(['cgx.refreshAfterReload'], (data) => {
    if (!data || !data['cgx.refreshAfterReload']) return;
    chrome.storage.local.remove(['cgx.refreshAfterReload'], () => refreshChatGPTTabsAfterReload());
  });
}, 500);
