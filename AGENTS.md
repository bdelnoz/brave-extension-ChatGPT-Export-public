<!--
Document : AGENTS.md
Author : Bruno DELNOZ
Email : bruno.delnoz@protonmail.com
Version : v4.6.0
Date : 2026-02-05 15:13
-->
# AGENTS.md

## 0. 🔴 SPECIFICATIONS.md GATE (ABSOLUTE HIGHEST PRIORITY)

### 0.1 Scope and precedence

- This section is the absolute highest-priority rule in this repository.
- This section overrides and takes precedence over ALL other sections of this `AGENTS.md` if any conflict, ambiguity, or ordering issue exists.
- This section applies before any coding, refactoring, patching, debugging, generation, rewrite, review with proposed implementation, documentation update related to behavior, commit preparation, or pull request preparation.
- If this section exists in a repository `AGENTS.md`, the agent MUST apply it systematically and without exception before any implementation work begins.

### 0.2 Mandatory `./SPECIFICATIONS.md` existence

- A file named exactly `./SPECIFICATIONS.md` MUST exist at the repository root.
- If `./SPECIFICATIONS.md` does not exist, the agent MUST create it before any code implementation starts.
- The initial `./SPECIFICATIONS.md` MUST be built from the current repository state only.
- The initial `./SPECIFICATIONS.md` MUST consolidate and describe all already-existing specifications that can be derived from the repository, including but not limited to:
  - scripts
  - source code
  - CLI behavior
  - configuration
  - defaults
  - options
  - file formats
  - naming rules
  - directory structure
  - automation logic
  - validations
  - outputs
  - constraints
  - current documented behavior
- The agent MUST NOT invent unsupported specifications.
- The agent MUST clearly distinguish in `./SPECIFICATIONS.md`:
  - verified current behavior derived from the repository
  - explicitly requested new behavior validated by the user
  - open points still awaiting user validation when applicable

### 0.3 `SPECIFICATIONS.md` as mandatory pre-coding gate

- `./SPECIFICATIONS.md` is the mandatory source of truth for repository specifications.
- No implementation work is allowed to start before the specifications phase required by this section is completed.
- No code, script, configuration, or documentation affecting repository behavior may be created or modified until the specification workflow defined below has been completed.

### 0.4 Mandatory specification-first workflow for any requested change

- For any user request that may modify behavior, logic, outputs, interfaces, workflow, naming, validation, configuration, dependencies, architecture, documentation semantics, or expected results, the agent MUST first prepare an updated complete specification proposal.
- The agent MUST present to the user the FULL updated specifications as they would stand after the requested change.
- The agent MUST NOT present only the delta, only a summary, or only a partial patch of the specifications.
- The agent MUST provide the complete updated specification view first, incorporating:
  - the already valid repository specifications
  - the newly requested modifications
  - all resulting consistency adjustments required by the request

### 0.5 Mandatory user approval loop

- After presenting the full updated specifications, the agent MUST wait for the user's explicit approval.
- The only approval that authorizes implementation is an explicit user validation such as `GO`, or an equivalent unambiguous approval.
- Until the user gives this explicit approval, the agent MUST NOT:
  - implement code
  - modify code
  - modify scripts
  - modify runtime logic
  - modify configuration
  - modify repository files to implement the requested behavior
  - claim the implementation is ready
- If the user requests changes to the proposed specifications or refuses them, the agent MUST:
  - revise the FULL specifications
  - present the FULL revised specifications again
  - repeat this loop as many times as needed
- This validation loop is mandatory and MUST continue until the user explicitly approves the specifications.

### 0.6 Mandatory order after approval

- Once the user explicitly approves the full specifications:
  1. the agent MUST create or update `./SPECIFICATIONS.md` first
  2. the agent MUST ensure `./SPECIFICATIONS.md` contains the validated full specifications
  3. only after that may the agent implement code and related repository changes
- The agent MUST then update all impacted files so that the repository matches the validated specifications.
- Implementation is forbidden if `./SPECIFICATIONS.md` has not yet been created or updated to the approved state.

### 0.7 Mandatory `SPECIFICATIONS.md` document rules

- `./SPECIFICATIONS.md` MUST be versioned.
- `./SPECIFICATIONS.md` MUST start with the repository standard Markdown metadata block.
- `./SPECIFICATIONS.md` MUST include at minimum:
  - document name
  - author
  - email
  - version
  - exact date and time
- `./SPECIFICATIONS.md` MUST contain an internal detailed changelog inside the file.
- This changelog requirement is mandatory for `./SPECIFICATIONS.md` even if other standalone Markdown documents normally do not require a changelog.
- For `./SPECIFICATIONS.md`, this section explicitly overrides any other Markdown-document rule that would otherwise make the changelog optional or unnecessary.

### 0.8 Mandatory `SPECIFICATIONS.md` changelog behavior

- The `./SPECIFICATIONS.md` changelog MUST keep the complete history of all specification versions.
- No historical specification version may be removed, compressed, summarized away, or replaced by a shortened history.
- Each changelog entry for `./SPECIFICATIONS.md` MUST contain at minimum:
  - version
  - exact date
  - exact time
  - author
  - clear list of specification additions
  - clear list of specification modifications
  - clear list of specification removals, if any
  - short reason or request context for the change
- The `./SPECIFICATIONS.md` changelog is append-only.
- If a specification changes again later, a new version entry MUST be added while preserving all older entries.

### 0.9 Mandatory minimum content of `SPECIFICATIONS.md`

- `./SPECIFICATIONS.md` MUST contain a structured specification view of the repository.
- Unless the user explicitly asks for a stricter structure, it MUST contain at least these sections:
  - Purpose
  - Scope
  - Existing verified behavior
  - Functional requirements
  - Non-functional requirements
  - Inputs
  - Outputs
  - Files and directories concerned
  - Interfaces and commands
  - Constraints and safety rules
  - Validation and acceptance criteria
  - Out-of-scope items
  - Changelog
- The content MUST be concrete, operational, and repository-specific.

### 0.10 Synchronization rule

- Any approved behavior change implemented in the repository MUST be reflected in `./SPECIFICATIONS.md` in the same task.
- The task is not complete if implementation and `./SPECIFICATIONS.md` are out of sync.
- The task is not complete if validated specifications were implemented only in code but not recorded in `./SPECIFICATIONS.md`.
- The task is not complete if `./SPECIFICATIONS.md` was updated but the repository implementation does not match it.

### 0.11 Definition of done under the specifications gate

- A task affecting repository behavior, logic, workflow, outputs, interfaces, or constraints is complete only if:
  - `./SPECIFICATIONS.md` exists
  - the full specifications were presented to the user first
  - the user explicitly approved the specifications
  - `./SPECIFICATIONS.md` was created or updated with the approved specifications before implementation
  - the implementation matches the approved specifications
  - the `./SPECIFICATIONS.md` version, date, time, and changelog were updated
  - all impacted repository files were synchronized with the approved specifications

### 0.12 Non-bypass rule

- The agent MUST NOT bypass this section by treating a request as a minor change, obvious change, quick fix, implicit change, cosmetic refactor, or direct coding request.
- Even if the user asks to code immediately, the agent MUST still pass through the specification workflow defined in this section before implementation, unless the user explicitly states that no repository change is requested and only a conceptual discussion is needed.

### 0.13 Mandatory `SPECIFICATIONS_FR.md` companion file

- A file named exactly `./SPECIFICATIONS_FR.md` MUST exist at the repository root whenever `./SPECIFICATIONS.md` exists.
- Every operation that creates, updates, rewrites, validates, synchronizes, versions, or otherwise modifies `./SPECIFICATIONS.md` MUST also create or update `./SPECIFICATIONS_FR.md` in the same task.
- `./SPECIFICATIONS_FR.md` is the mandatory French companion version of `./SPECIFICATIONS.md`.
- `./SPECIFICATIONS_FR.md` MUST contain the same validated specifications, structure, version, date, time, changelog history, acceptance criteria, constraints, and repository-specific operational meaning as `./SPECIFICATIONS.md`, translated into French.
- The agent MUST NOT treat `./SPECIFICATIONS_FR.md` as a summary, shortened translation, partial translation, appendix, or optional convenience file.
- The agent MUST preserve the same specification version number in both files for the same approved specification state.
- The agent MUST update both files atomically within the same task so that neither file is stale compared with the other.
- The task is not complete if `./SPECIFICATIONS.md` and `./SPECIFICATIONS_FR.md` are not synchronized.
- The task is not complete if `./SPECIFICATIONS.md` exists but `./SPECIFICATIONS_FR.md` does not exist.
- The task is not complete if `./SPECIFICATIONS_FR.md` exists but does not reflect the latest approved `./SPECIFICATIONS.md` content.
- When the specification-first workflow requires presenting the FULL updated specifications to the user, the agent MUST present the complete updated English specification and the complete updated French companion specification before implementation, unless the user explicitly requests only one language for review.
- After explicit user approval, the mandatory update order is:
  1. create or update `./SPECIFICATIONS.md` with the approved English specifications
  2. create or update `./SPECIFICATIONS_FR.md` with the approved French companion specifications
  3. verify that both files share the same version, date, time, changelog state, and specification meaning
  4. only after that, implement code and related repository changes
- `./SPECIFICATIONS_FR.md` MUST follow the same Markdown metadata block rules as `./SPECIFICATIONS.md`, with `Document : SPECIFICATIONS_FR.md`.
- `./SPECIFICATIONS_FR.md` MUST include an internal detailed changelog, append-only, preserving the complete history of all French specification versions.
- If `./SPECIFICATIONS.md` is initialized from current repository state, `./SPECIFICATIONS_FR.md` MUST be initialized from the same repository state in French during the same operation.
- If `./SPECIFICATIONS.md` is changed due to an approved behavior change, `./SPECIFICATIONS_FR.md` MUST be changed during the same operation for the same approved behavior change.

### 0.14 Mandatory `SPECIFICATIONS_GLOBAL.md` repository baseline file

- A file named exactly `./SPECIFICATIONS_GLOBAL.md` MUST exist at the repository root.
- `./SPECIFICATIONS_GLOBAL.md` is the mandatory global, repository-wide, persistent specification baseline.
- `./SPECIFICATIONS_GLOBAL.md` MUST describe the stable repository-level purpose, architecture, constraints, files, commands, configuration, conventions, safety rules, validation rules, and long-term expected behavior that are not limited to the current Codex task.
- `./SPECIFICATIONS.md` and `./SPECIFICATIONS_FR.md` are mandatory task-scoped specification files for the current Codex operation and its French companion version.
- `./SPECIFICATIONS_GLOBAL.md` MUST NOT be treated as a replacement for `./SPECIFICATIONS.md` or `./SPECIFICATIONS_FR.md`.
- `./SPECIFICATIONS.md` and `./SPECIFICATIONS_FR.md` MUST NOT be treated as replacements for `./SPECIFICATIONS_GLOBAL.md`.
- If `./SPECIFICATIONS_GLOBAL.md` does not exist, the agent MUST create it before any code implementation starts.
- The initial `./SPECIFICATIONS_GLOBAL.md` MUST be built from the current repository state only.
- The agent MUST NOT invent unsupported global specifications.
- The agent MUST clearly distinguish in `./SPECIFICATIONS_GLOBAL.md`:
  - verified stable repository behavior derived from the repository
  - global repository constraints and conventions
  - current task-specific requirements that must remain only in `./SPECIFICATIONS.md` and `./SPECIFICATIONS_FR.md`
  - open global points still awaiting user validation when applicable
- Any approved change that modifies stable repository-wide behavior, architecture, interfaces, file layout, commands, configuration, constraints, safety model, validation rules, or long-term expected behavior MUST update `./SPECIFICATIONS_GLOBAL.md` in the same task.
- Any approved change that is limited to the current Codex task MUST update `./SPECIFICATIONS.md` and `./SPECIFICATIONS_FR.md` but MUST NOT be promoted into `./SPECIFICATIONS_GLOBAL.md` unless it also changes the stable global repository baseline.
- `./SPECIFICATIONS_GLOBAL.md` MUST be versioned.
- `./SPECIFICATIONS_GLOBAL.md` MUST start with the repository standard Markdown metadata block, with `Document : SPECIFICATIONS_GLOBAL.md`.
- `./SPECIFICATIONS_GLOBAL.md` MUST include at minimum:
  - document name
  - author
  - email
  - version
  - exact date and time
- `./SPECIFICATIONS_GLOBAL.md` MUST contain an internal detailed changelog inside the file.
- The `./SPECIFICATIONS_GLOBAL.md` changelog MUST be append-only and MUST preserve the complete history of all global specification versions.
- `./SPECIFICATIONS_GLOBAL.md` MUST contain a structured global specification view of the repository.
- Unless the user explicitly asks for a stricter structure, it MUST contain at least these sections:
  - Purpose
  - Global scope
  - Stable verified repository behavior
  - Repository architecture
  - Global functional requirements
  - Global non-functional requirements
  - Global inputs
  - Global outputs
  - Global files and directories
  - Global interfaces and commands
  - Global constraints and safety rules
  - Global validation and acceptance criteria
  - Task-scoped specification boundary
  - Out-of-scope items
  - Changelog
- When the specification-first workflow requires presenting the FULL updated specifications to the user, the agent MUST also present the complete updated `SPECIFICATIONS_GLOBAL.md` proposal if the requested change affects the global repository baseline.
- After explicit user approval, the mandatory update order is:
  1. create or update `./SPECIFICATIONS_GLOBAL.md` when the approved change affects the global repository baseline
  2. create or update `./SPECIFICATIONS.md` with the approved English task-scoped specifications
  3. create or update `./SPECIFICATIONS_FR.md` with the approved French companion task-scoped specifications
  4. verify that global and task-scoped specifications are consistent but not conflated
  5. only after that, implement code and related repository changes
- The task is not complete if a global repository-baseline change was implemented but not recorded in `./SPECIFICATIONS_GLOBAL.md`.
- The task is not complete if a current task-scoped change was incorrectly recorded only in `./SPECIFICATIONS_GLOBAL.md` and not in `./SPECIFICATIONS.md` and `./SPECIFICATIONS_FR.md`.
- The task is not complete if `./SPECIFICATIONS_GLOBAL.md`, `./SPECIFICATIONS.md`, and `./SPECIFICATIONS_FR.md` contradict each other.

### 0.15 Mandatory `SPECIFICATIONS_GLOBAL_FR.md` repository baseline file

- A file named exactly `./SPECIFICATIONS_GLOBAL_FR.md` MUST exist at the repository root.
- `./SPECIFICATIONS_GLOBAL_FR.md` is the mandatory French companion version of `./SPECIFICATIONS_GLOBAL.md`.
- `./SPECIFICATIONS_GLOBAL_FR.md` MUST describe the same global, repository-wide, persistent specification baseline as `./SPECIFICATIONS_GLOBAL.md`, but in French.
- `./SPECIFICATIONS_GLOBAL_FR.md` MUST NOT introduce requirements, constraints, behavior, architecture, commands, validation rules, safety rules, or assumptions that are not present in `./SPECIFICATIONS_GLOBAL.md`.
- `./SPECIFICATIONS_GLOBAL_FR.md` MUST NOT omit any requirement, constraint, behavior, architecture, command, validation rule, safety rule, open point, or changelog entry that exists in `./SPECIFICATIONS_GLOBAL.md`.
- `./SPECIFICATIONS_GLOBAL_FR.md` MUST be treated as a faithful French translation and companion document, not as an independent specification source.
- In case of ambiguity between `./SPECIFICATIONS_GLOBAL.md` and `./SPECIFICATIONS_GLOBAL_FR.md`, `./SPECIFICATIONS_GLOBAL.md` is the authoritative source, and `./SPECIFICATIONS_GLOBAL_FR.md` MUST be corrected to match it.
- `./SPECIFICATIONS_GLOBAL_FR.md` MUST NOT be treated as a replacement for `./SPECIFICATIONS_GLOBAL.md`.
- `./SPECIFICATIONS_GLOBAL.md` MUST NOT be treated as a replacement for `./SPECIFICATIONS_GLOBAL_FR.md`.
- `./SPECIFICATIONS.md` and `./SPECIFICATIONS_FR.md` remain mandatory task-scoped specification files for the current Codex operation.
- `./SPECIFICATIONS_GLOBAL.md` and `./SPECIFICATIONS_GLOBAL_FR.md` remain mandatory global repository-baseline specification files.
- The agent MUST clearly distinguish:
  - global repository-baseline specifications stored in `./SPECIFICATIONS_GLOBAL.md` and `./SPECIFICATIONS_GLOBAL_FR.md`
  - task-scoped specifications stored in `./SPECIFICATIONS.md` and `./SPECIFICATIONS_FR.md`
- If `./SPECIFICATIONS_GLOBAL.md` exists but `./SPECIFICATIONS_GLOBAL_FR.md` does not exist, the agent MUST create `./SPECIFICATIONS_GLOBAL_FR.md` before any code implementation starts.
- If both files are missing, the agent MUST first create `./SPECIFICATIONS_GLOBAL.md` from the current repository state only, then create `./SPECIFICATIONS_GLOBAL_FR.md` as its French companion version.
- The initial `./SPECIFICATIONS_GLOBAL_FR.md` MUST be built only from the validated content of `./SPECIFICATIONS_GLOBAL.md`.
- The agent MUST NOT invent unsupported French global specifications.
- The agent MUST NOT add French-only global requirements.
- The agent MUST NOT silently simplify, summarize, shorten, or reinterpret the English global baseline when creating or updating `./SPECIFICATIONS_GLOBAL_FR.md`.
- `./SPECIFICATIONS_GLOBAL_FR.md` MUST preserve the same structure, section order, level of detail, versioning logic, and changelog semantics as `./SPECIFICATIONS_GLOBAL.md`.
- `./SPECIFICATIONS_GLOBAL_FR.md` MUST be versioned.
- `./SPECIFICATIONS_GLOBAL_FR.md` MUST start with the repository standard Markdown metadata block, with `Document : SPECIFICATIONS_GLOBAL_FR.md`.
- `./SPECIFICATIONS_GLOBAL_FR.md` MUST include at minimum:
  - document name
  - author
  - email
  - version
  - exact date and time
- `./SPECIFICATIONS_GLOBAL_FR.md` MUST contain an internal detailed changelog inside the file.
- The `./SPECIFICATIONS_GLOBAL_FR.md` changelog MUST be append-only and MUST preserve the complete history of all French global specification versions.
- Every changelog entry in `./SPECIFICATIONS_GLOBAL.md` that affects the global repository baseline MUST have a corresponding French changelog entry in `./SPECIFICATIONS_GLOBAL_FR.md`.
- Any approved change that modifies stable repository-wide behavior, architecture, interfaces, file layout, commands, configuration, constraints, safety model, validation rules, or long-term expected behavior MUST update both:
  1. `./SPECIFICATIONS_GLOBAL.md`
  2. `./SPECIFICATIONS_GLOBAL_FR.md`
- Any approved change that is limited to the current Codex task MUST update `./SPECIFICATIONS.md` and `./SPECIFICATIONS_FR.md` but MUST NOT be promoted into `./SPECIFICATIONS_GLOBAL.md` or `./SPECIFICATIONS_GLOBAL_FR.md` unless it also changes the stable global repository baseline.
- When the specification-first workflow requires presenting the FULL updated specifications to the user, the agent MUST also present the complete updated `SPECIFICATIONS_GLOBAL.md` and `SPECIFICATIONS_GLOBAL_FR.md` proposals if the requested change affects the global repository baseline.
- After explicit user approval, the mandatory update order is:
  1. create or update `./SPECIFICATIONS_GLOBAL.md` when the approved change affects the global repository baseline
  2. create or update `./SPECIFICATIONS_GLOBAL_FR.md` as the faithful French companion version of `./SPECIFICATIONS_GLOBAL.md`
  3. create or update `./SPECIFICATIONS.md` with the approved English task-scoped specifications
  4. create or update `./SPECIFICATIONS_FR.md` with the approved French companion task-scoped specifications
  5. verify that global and task-scoped specifications are consistent but not conflated
  6. verify that `./SPECIFICATIONS_GLOBAL_FR.md` faithfully matches `./SPECIFICATIONS_GLOBAL.md`
  7. only after that, implement code and related repository changes
- The task is not complete if a global repository-baseline change was implemented but not recorded in both `./SPECIFICATIONS_GLOBAL.md` and `./SPECIFICATIONS_GLOBAL_FR.md`.
- The task is not complete if `./SPECIFICATIONS_GLOBAL_FR.md` is missing while `./SPECIFICATIONS_GLOBAL.md` exists.
- The task is not complete if `./SPECIFICATIONS_GLOBAL_FR.md` contradicts `./SPECIFICATIONS_GLOBAL.md`.
- The task is not complete if `./SPECIFICATIONS_GLOBAL_FR.md` contains French-only requirements that are absent from `./SPECIFICATIONS_GLOBAL.md`.
- The task is not complete if `./SPECIFICATIONS_GLOBAL_FR.md` omits requirements present in `./SPECIFICATIONS_GLOBAL.md`.
- The task is not complete if a current task-scoped change was incorrectly recorded only in `./SPECIFICATIONS_GLOBAL.md` or `./SPECIFICATIONS_GLOBAL_FR.md` and not in `./SPECIFICATIONS.md` and `./SPECIFICATIONS_FR.md`.
- The task is not complete if `./SPECIFICATIONS_GLOBAL.md`, `./SPECIFICATIONS_GLOBAL_FR.md`, `./SPECIFICATIONS.md`, and `./SPECIFICATIONS_FR.md` contradict each other.






## 1. 🔴 CRITICAL GIT WORKFLOW (HIGHEST PRIORITY)

- Every task MUST start from a clean and up-to-date `origin/main`.

- Before applying any change:
  - fetch origin
  - ensure working state is aligned with latest `origin/main`

- Before creating a PR:
  - fetch origin
  - rebase or reset onto latest `origin/main`
  - verify that HEAD strictly matches the latest `origin/main` base

- NEVER reuse a stale worktree, outdated branch, or obsolete branch state.
- NEVER continue working on a new change from the same branch after a PR has been merged.

- After a PR is merged:
  - the previous working branch/state MUST be considered obsolete
  - a NEW branch MUST be created from latest `origin/main`

- If the current environment is uncertain, stale, or diverged:
  - force refresh from `origin/main` before proceeding

- Avoid creating PRs from stale, diverged, reused, or outdated branches.

- Prefer:
  - one coherent task per branch
  - one fresh branch per merged PR

- Before proposing any git command that modifies history or state, explicitly prefer the safest non-destructive path unless the user requested a destructive action.

## 2. Active instruction set

- This `AGENTS.md` file is the only active instruction source for this repository.
- Treat `AGENTS.md` as the only valid active rule set.
- Do not combine these repository rules with older external rule files or legacy rule sets.
- If this `AGENTS.md` file is updated later, the newest complete version becomes the only valid active instruction set for this repository.
- Do not summarize these repository rules.
- Do not reinterpret these repository rules.
- Apply these repository rules as written.
- Do not request, require, or depend on any external rule file when this `AGENTS.md` is present.

### 2.1 `AGENTS.md` immutability rule

- `./AGENTS.md` is a repository governance file, not a normal task deliverable.
- The agent MUST NOT modify, rewrite, reformat, normalize, rename, delete, move, regenerate, version-bump, or otherwise alter `./AGENTS.md` during repository work unless the user explicitly requests an `AGENTS.md` modification in the current task.
- The agent MUST NOT include `./AGENTS.md` in automatic documentation updates, companion-file updates, formatting passes, cleanup passes, refactors, repository-wide rewrites, or Codex-generated maintenance changes.
- The agent MUST NOT modify `./AGENTS.md` merely to make the current task easier, to resolve perceived instruction conflicts, to align it with generated code, or to adapt the repository rules to the agent's preferred workflow.
- If a requested task affects scripts, documentation, specifications, source code, tests, configuration, or repository structure, `./AGENTS.md` MUST remain unchanged unless the user explicitly names `AGENTS.md` as a file to update.
- If a diff, patch, commit, or generated change includes an unintended modification to `./AGENTS.md`, the agent MUST stop and revert that `AGENTS.md` change before continuing.
- Only the user may decide to change `./AGENTS.md`; the agent's role is to apply it, not to maintain, reinterpret, or self-edit it.

### 2.2 `CLAUDE.md` symlink protection rule

- If a file named exactly `./CLAUDE.md` exists at the repository root, the agent MUST NOT modify, rewrite, reformat, normalize, rename, delete, move, regenerate, version-bump, or otherwise alter `./CLAUDE.md` during repository work unless the user explicitly requests a `CLAUDE.md` modification in the current task.
- `./CLAUDE.md` is expected to be a symbolic link pointing to `./AGENTS.md`.
- The required repository state is exactly:
  - `CLAUDE.md -> AGENTS.md`
- If `./CLAUDE.md` does not exist, the agent MUST create it as a symbolic link to `./AGENTS.md` when repository instruction-file setup, validation, synchronization, bootstrap, or rule-compliance work is being performed.
- If `./CLAUDE.md` exists but is not a symbolic link to `./AGENTS.md`, the agent MUST replace it automatically with the correct symbolic link to `./AGENTS.md`.
- This replacement MUST be performed without asking for additional confirmation, because `./CLAUDE.md` is not an independent source file in this repository.
- Replacement means removing the incorrect `./CLAUDE.md` path and recreating it exactly as a symbolic link pointing to `./AGENTS.md`.
- The expected corrective command is:

```bash
rm -f ./CLAUDE.md
ln -s AGENTS.md ./CLAUDE.md
```

- If `./CLAUDE.md` is a directory or cannot be safely removed with `rm -f`, the agent MUST stop and report the blocking filesystem state instead of forcing a recursive deletion.
- The agent MUST NOT maintain a separate Claude-specific instruction file with duplicated content.
- The agent MUST NOT copy the content of `./AGENTS.md` into `./CLAUDE.md`.
- The agent MUST NOT treat `./CLAUDE.md` as an independent source of repository rules.
- `./AGENTS.md` remains the master instruction file; `./CLAUDE.md` is only a compatibility pointer for tools that look for a Claude instruction filename.
- If a diff, patch, commit, or generated change includes an unintended modification to `./CLAUDE.md` content or breaks the symbolic link relationship, the agent MUST stop and revert that `CLAUDE.md` change before continuing.

## 3. Language and communication rules

- Interactive chat exchanges with the user MUST be written in French by default.
- Any AI agent working in this repository MUST reply to the user in French in direct chat interactions, unless the user explicitly requests another language for the conversation.
- All repository deliverables and artifacts MUST be written in English by default.
- This includes, but is not limited to: source code deliverables, Markdown files, documentation files, README files, CHANGELOG files, INSTALL files, WHY files, comments intended for repository maintainers, commit messages, pull request titles, and pull request descriptions.
- Exception: `./SPECIFICATIONS_FR.md` MUST be written in French and synchronized with `./SPECIFICATIONS.md` as defined in section `0.13`.
- Do not apply chat-language rules to repository files or repository deliverables.
- Only switch repository deliverables or artifacts to French if the user explicitly requests French for those deliverables.
- Technical terms, code, commands, logs, error messages, protocol names, API names, commit labels, and standard engineering vocabulary may remain in English when appropriate.

## 4. General execution behavior

- Follow the user request directly.
- Always communicate with the user in French in direct chat interactions unless the user explicitly requests another language.
- For script work, provide the **full complete script** immediately, even for a tiny modification.
- Do not provide partial patches instead of the full script when the request is about script generation or script correction.
- Do not simplify existing scripts.
- Do not remove existing features.
- Do not condense existing code.
- Do not reduce the number of lines compared with the previous version of a script.
- If the requested modification explicitly asks to simplify, remove, or condense existing content, ask for confirmation before producing that reduced version.
- When possible, provide generated content as downloadable files first; after that, ask whether the user also wants the content displayed in a Markdown box.
- When the user asks to modify a file, provide the full complete updated file, not only a partial diff or isolated patch, unless the user explicitly asks for a diff.
- Do not leave placeholders such as TODO, FIXME, <value_here>, or "adapt as needed" in deliverables unless the user explicitly requests a template.
- Prefer ready-to-use outputs over partially prepared outputs.
- Never remove existing comments, metadata, changelog entries, options, safety checks, or documentation sections unless the user explicitly requests their removal.
- Do not rename existing files, functions, variables, directories, services, or commands unless the user explicitly requests it.
- Do not invent tests, executions, validations, results, metrics, dates, environments, or completed actions that did not actually occur.
- If something was not executed or verified, state it explicitly.
- Clearly distinguish between:
  - what is already done
  - what is proposed
  - what still requires execution or validation
- Do not silently reformat, reorder, reorganize, or normalize existing content unless the user explicitly requests such restructuring.
- Prefer outputs that are directly usable, copy-paste ready, and execution-ready.
- Avoid abstract explanations when the user asked for an operational result.
- Do not ask for confirmation when the user clearly requested an immediate modification or generation.
- Execute the requested work directly unless a real ambiguity blocks correctness.

### 4.1 Non-destructive update guards (mandatory)

- For existing files, update in-place and preserve prior content unless explicit removal is requested by the user.
- Full file rewrites of existing files are forbidden unless the user explicitly asks for a complete rewrite.
- For `CHANGELOG.md`, updates are append-only: do not delete, compress, summarize, or rewrite existing historical entries.
- Any change that removes existing `CHANGELOG.md` lines is forbidden unless explicitly requested by the user.
- Before commit, run a focused diff check on `CHANGELOG.md`; if removed lines are detected, stop and fix before continuing.

### 4.2 Mandatory companion updates for script-related tasks

- Any modification to a script file automatically requires companion updates in the same task.
- Unless the user explicitly forbids it, every script-related change MUST also update, create, or complete as needed:
  - the script internal version
  - the script internal date
  - the script internal changelog
  - `./README.md`
  - `./CHANGELOG.md`
  - `./INSTALL.md`
  - `./WHY.md`
- A script-related task is NOT complete until these companion files have been checked and updated when applicable.
- Do not treat documentation updates as optional when a script changes.
- If a related mandatory documentation file does not exist, create it automatically.
- If a related mandatory documentation file already exists, update it in place.
- If a script is modified, do not stop after editing only the script when related repository documentation is missing, outdated, or incomplete.
- When a script changes, repository deliverables must remain synchronized with the script in the same task.

### 4.3 Mandatory version bump and release metadata updates

- Any modification to an existing script file MUST trigger a version bump in the same task.
- Do not leave the script version unchanged after a real script modification.
- The script internal version, internal date, and internal changelog entry MUST be updated together in the same task.
- If the repository contains companion documentation tied to the script version, that documentation MUST also be synchronized in the same task.
- A script-related task is NOT complete until the version bump has been applied wherever required by this `AGENTS.md`.
- If the user explicitly requests no version bump, follow the user request; otherwise, version bumping is mandatory.
- If a script change is only cosmetic and the user explicitly forbids version changes, state that constraint clearly; otherwise, do not skip the version bump.
- Never silently keep the previous version number after modifying script logic, options, behavior, metadata, or documentation tied to that script.

### 4.4 Definition of done for script-related tasks

- A script-related task is complete only if all mandatory code, metadata, versioning, changelog, and companion documentation updates required by this `AGENTS.md` have been applied.
- Partial completion is forbidden when mandatory companion updates are still missing.
- Do not treat the directly requested script file as the only required deliverable when related mandatory updates are still pending.
- A task must not be marked as finished if any mandatory version bump, metadata update, changelog update, or documentation synchronization is still missing.

### 4.5 Mandatory final compliance check

- Before considering a task complete, perform a final compliance check against this `AGENTS.md`.
- If any mandatory rule from this `AGENTS.md` is not satisfied, continue the task until full compliance is reached.
- Before stopping, verify that required files, metadata blocks, version values, dates, changelog entries, and mandatory documentation updates are present and synchronized.

### 4.6 Multi-language applicability

- These rules apply to executable scripts in any supported language, including but not limited to shell, Python, JavaScript, Java, PowerShell, and similar languages.
- When applicable, related repository deliverables, companion documentation, runtime wrappers, and automation files tied to those scripts must follow the same versioning, synchronization, and metadata rules.
- Do not treat these rules as shell-only when the repository task concerns an executable script in another supported language.

## 5. Secrets and sensitive material

- Never place secrets, passwords, certificates, tokens, or similar sensitive values directly in versioned code.
- If a script needs secrets, use a local file at `./.secrets`.
- Ensure `./.secrets` is covered by `.gitignore`.
- Do not push secret material to git.

## 6. Script authoring rules

### 6.1 Internal comments

- Comment each block and each section as much as possible to explain the internal logic.

### 6.2 Mandatory header for executable scripts

Every executable script must start with a header containing at minimum:

- Full path and script name
- Author name
- Email
- Target usage / short purpose
- Version
- Date
- Changelog

### 6.3 Author identity

Use the following values unless the user explicitly overrides them:

- Author: **Bruno DELNOZ**
- Email: **bruno.delnoz@protonmail.com**

### 6.4 Versioning

- All generated scripts must be versioned and dated, even for a minor modification.
- The first version must start at **v1.0** or **v1.0.0**.
- Increment the version every time a script is produced again.
- The changelog must be updated every time.
- Do not add changelog entries that merely say new scripting rules were applied.

### 6.5 Version bump execution rules

- Version bumping is mandatory for every script modification unless the user explicitly forbids it.
- Updating the script content without updating its version metadata is forbidden.
- Updating the script version without updating the script date and changelog is forbidden.
- If a script is modified, the agent MUST update the version, date, and changelog before considering the task finished.
- Treat version bumping as part of the required implementation, not as an optional follow-up step.

### 6.6 Changelog rules

- Keep the complete version history in the script.
- No version entry may be omitted.
- `--changelog` must always exist.
- The changelog display should use Markdown formatting when possible.
- If a separate `CHANGELOG.md` file exists, it may hold the detailed history while the script keeps at least every version, its date, and a short explanation.

### 6.7 Progress display

- When applicable, scripts must display execution progress.
- For multi-step execution, display the current step with its name and index, for example `Scan du disque (1/56)`.

## 7. Mandatory CLI behavior for scripts

### 7.1 Help

- A help block is mandatory.
- If no argument is provided, display help by default.
- `--help` must document every usage, every option, every argument, default values, all possible values, and several clear examples.

### 7.2 Required options

Include these options whenever applicable and keep their behavior aligned with this `AGENTS.md`:

- `--help` / `-h`
- `--exec` / `-exe`
- `--stop` / `-st` when applicable
- `--prerequis` / `-pr`
- `--install` / `-i`
- `--simulate` / `-s`
- `--changelog` / `-ch`
- `--purge` / `-pu`

### 7.3 Defaults

- Define default values when arguments are omitted.

### 7.4 Simulate mode

- `--simulate` is a CLI option.
- `--simulate` is inactive by default.
- The presence of `--simulate` alone activates dry-run mode.
- It must be callable directly, for example: `script.sh --simulate`.
- Do not require `true` or `false` values for `--simulate`.
- In simulate mode, reading, analysis, and logging remain active.
- Sensitive actions and system modifications must not execute for real while `--simulate` is present.

### 7.5 Prerequisites

- Support prerequisite verification before execution.
- `--prerequis` must list prerequisites and report each one as satisfied or missing.
- If something is missing, handle it cleanly and propose `--install`.
- A skip path may exist when appropriate.

## 8. Runtime output, logs, and artifacts

### 8.1 Console explanations

- For each script execution, explain each step clearly in the console.
- Mirror the same logic in comments and in logs.

### 8.2 Post-execution summary

- After execution, print a numbered list of all actions performed.

### 8.3 Logs

- Create a `./logs` directory next to the script if it does not already exist.
- Write detailed logs there.
- Log filename pattern must follow the repository rule form defined in this `AGENTS.md`:
  - `./logs/log.<script_name>.<full_timestamp>.<script_version>.log`

### 8.4 Results

- Create a `./results` directory next to the script if it does not already exist.
- Put generated content there.
- Generated filenames must be tied to the script name and version.
- Example: `./results/<other_name>.<script_name>.vX.X.txt`
- The destination folder for results must be overridable with `--dest_dir`.

## 9. Sudo and ready-to-use behavior

- Prefer scripts that are ready to use immediately.
- Always put `sudo` inside the script.
- Do not require the user to run `sudo ./script.sh`.
- Prefer zero external sudo.

## 10. Documentation generation rules

### 10.1 Automatic files

For script projects, on first creation generate without asking:

- `./README.md`
- `./CHANGELOG.md`
- `./INSTALL.md`
- `./WHY.md`

### 10.2 Major version updates

- On a major version bump (e.g. `3.2.0` → `4.0.0`), ask the user before updating `README.md` and `CHANGELOG.md`.

### 10.3 Update behavior

- Documentation maintenance is mandatory on script-related tasks, not optional.
- For any script modification, check `./README.md`, `./CHANGELOG.md`, `./INSTALL.md`, and `./WHY.md` in the same task and update them when applicable.
- Do not stop after updating only the script when companion documentation is missing, stale, incomplete, or inconsistent with the script.
- If one of the mandatory documentation files does not exist, create it automatically.
- Never delete or compress existing documentation files.
- If sections are missing, complete them automatically.
- Ensure generated `.md` files include:
  - full script name
  - precise date and time of last generation or modification
  - script version
  - authors and contacts

### 10.4 CHANGELOG.md content

- `CHANGELOG.md` must exist in `./`.
- It must contain the version number, exact date and time, author name, and the full list of changes with a short description for each point.
- Keep the complete history of all versions.
- Never remove older versions.

## 11. Metadata rules for documents and artifacts

### 11.1 Executable non-shell scripts

- Executable scripts written in other languages (`.py`, `.js`, `.java`, `.ps1`, etc.) must carry the same header information as shell scripts.
- Only the comment syntax changes with the language.
- Place the header at the beginning of the file, after the shebang if applicable.
- Apply the same versioning and changelog rules as for shell scripts.

### 11.2 Markdown documents

- A standalone `.md` document must start with a metadata block before the first title.
- The metadata must contain at minimum: document name or title, author, email, version, date and time.
- Use the following exact repository HTML comment format:

```md
<!--
Document : <Full document name>
Author : Bruno DELNOZ
Email : bruno.delnoz@protonmail.com
Version : vX.X.X
Date : YYYY-MM-DD HH:MM
-->
# <Document title>
```

- No changelog is required in a standalone `.md` document.
- If a `.md` file is generated as script documentation, it must also follow the documentation rules above.

### 11.3 Text documents

- A standalone `.txt` document must start with a metadata block.
- The metadata must contain at minimum: document name or title, author, email, version, date and time.
- No changelog is required in a standalone `.txt` document.

## 12. Repository expectations for Codex and Claude Code

- Treat this file as repository-wide instructions.
- Apply these rules before proposing code changes, reviews, or generated artifacts.
- When working inside this repository, prefer compliance with this file over generic habits.
- Keep outputs strict, direct, and operational.

### 12.1 Global network restriction rules

- Rules defined in repository-specific section `13.x` MUST take precedence over generic network behavior for the targeted repository.
- External website access is authorized only when the user explicitly provides the external HTTPS URL or the external HTTPS domain in the initial prompt or task input.
- The agent MUST strictly access only the exact user-provided external HTTPS domain or URL.
- The agent MUST NOT perform open-ended browsing, autonomous discovery, search engine browsing, or navigation to any other external website or domain.
- External website access is allowed over HTTPS only.
- Any `http://` website or any non-HTTPS external source is strictly forbidden.
- No repository content may be sent outside the local task environment.
- The agent MUST NEVER send or expose repository files, repository text, drafts, logs, prompts, environment variables, secrets, extracted repository data, or any repository-derived content to any external service.
- If the user does not explicitly provide an external HTTPS URL or domain, the agent MUST assume that no external internet access is authorized.
- Repository-specific network rules defined in section `13.x` override this section for the targeted repository.



## 13.0 Specific rules for specific repositories

The following subsections define rules that apply ONLY to explicitly targeted repositories.

Each subsection targets one repository only.

If the current repository does NOT match the repository explicitly named in a subsection, that subsection MUST be ignored entirely.

These repository-specific rules supplement or override the default behavior only for the targeted repository.

### 13.1 Specific rules for repository `bdelnoz/Emploi`

#### 13.1.1 Scope
- These rules apply ONLY if the current repository is exactly:
  - `bdelnoz/Emploi`
- Otherwise, this subsection MUST be ignored entirely.

#### 13.1.2 Repository objective
- This repository is dedicated primarily to:
  - job offer analysis
  - targeted CV generation
  - cover letter generation
  - professional application document generation
- For this repository, the agent MUST prioritize high-quality professional application deliverables over generic code-oriented behavior.

#### 13.1.3 Mandatory new CV generation
- For each new job-offer-based CV request, the agent MUST create NEW CV files.
- The agent MUST NOT return an existing CV file as the final result.
- The agent MUST NOT merely rename an existing CV file and present it as a new deliverable.
- Existing CV files in the repository are SOURCE MATERIAL ONLY.

#### 13.1.4 Mandatory multi-version output
- Unless the user explicitly requests otherwise, each targeted CV generation task MUST produce:
  - 1 CV in 2 pages
  - 1 CV in 3 pages
  - 1 CV in 4 pages
  - 1 CV in 5 pages
- The expected default total is:
  - 4 distinct CV files

#### 13.1.5 TARGET_COMPANY support
- The user MAY explicitly provide a target company string using:
  - `TARGET_COMPANY=<VALUE>`
- If `TARGET_COMPANY` is explicitly provided by the user, the agent MUST use that exact value as the source of truth for file naming.
- The agent MUST NOT modify, normalize, simplify, translate, or replace that provided value.
- If `TARGET_COMPANY` is not provided:
  - try to extract the target company from the job offer and ask user his agrement with your extracton before doing anything else 
  - if extraction is impossible, ask this info to the user before doing anything
- Never start creating the documents without this information or the confirmation given by the user.

#### 13.1.6 Mandatory filename rules
- Every element of the gererated filename must be seprated by a - 
- Element that contains more than one word must be separated by a _

- Every generated CV filename MUST:
  - contain the `TARGET_COMPANY` value exactly inside the full filemane
  - clearly distinguish the number of pages variant
  - use the `.docx` format
- Accepted page markers must include:
  - `2_Pages`
  - `3_Pages`
  - `4_Pages`
  - `5_Pages`
- The rest of the filename may vary, but `TARGET_COMPANY` is mandatory.
- the filename should start with : "CV_BRUNO_DELNOZ".
- then the user prompt provided as TARGET_COMPANY (see 13.1.5) ie: ESA_REDU
- then the job position name (I.E.: System_Enginer, Enterprise_Architect).
- Then the current YYYY_MM
- Then the pages markers is : 2_Pages , 3_Pages 
- Then the version of the CV. ie: 1.0.0 (each new request or modif must increment that version)
- Then the .docx extension

so a filename should look like this : 
CV_BRUNO_DELNOZ-ESA_REDU-Systems_And_Network_Engineer-2026_03-2_Pages-1.0.0.docx 

#### 13.1.7 Mandatory generation workflow
- For each targeted CV request, the agent MUST:
  1. analyze the job offer
  2. identify the target role
  3. identify the key required skills and responsibilities
  4. search the repository for relevant factual source material
  5. extract and recombine relevant information
  6. build a NEW targeted CV
  7. produce the required output variants
- The agent MUST NOT skip repository source analysis for this repository.

#### 13.1.8 Anti-hallucination rules for `bdelnoz/Emploi`
- The agent MUST NEVER invent:
  - experience
  - job titles
  - years of experience
  - technologies
  - certifications
  - achievements
  - metrics
  - responsibilities
  - clients
  - language levels
- If a requirement from the job offer is not supported by repository data, the agent MUST:
  - omit it
  - or phrase it conservatively and honestly
- Unsupported requirements MUST NEVER be fabricated.

#### 13.1.9 Existing repository material usage
- Existing CVs, letters, analyses, and all other related files in this repository may be used only to:
  - extract factual content
  - identify the best positioning
  - compare structures
  - reuse valid wording
- They MUST NOT be reused as-is as final deliverables when a new targeted CV is requested.

#### 13.1.10 Output format requirement
- For this repository, final CV deliverables requested as professional outputs MUST be actually generated in:
  - `.docx`
- If the requested final `.docx` files are not actually generated, the task is NOT complete.
- The layout, format, title tree, etc should be inspired by all .docx resume located inside the repo including subdir etc 

#### 13.1.11 Consistency requirement across variants
- The generated 2-pages, 3-pages, 4-pages, and 5-pages versions MUST:
  - target the same role
  - use the same factual base
  - remain mutually consistent
- They may differ in compression level and detail level only.

#### 13.1.12 Definition of done for `bdelnoz/Emploi`
- A standard targeted CV task for this repository is complete only if:
  - the job offer has been analyzed
  - repository sources have been deeply and fully analaysed and used
  - a NEW targeted CV set has been generated
  - the expected variants have been produced unless the user explicitly requested otherwise
  - all generated CV filenames must respect fully the naming explained in section 13.1.6 
  - all final CV files are actually generated in `.docx`
  - no hallucinated data has been introduced

#### 13.1.13 Network access policy for `bdelnoz/Emploi`

- For this repository, external internet access is forbidden by default unless the user explicitly provides an external HTTPS website, URL, or domain.
- If the user explicitly provides an external HTTPS website, URL, or domain, the agent MAY access only that exact user-provided external HTTPS website, URL, or domain.
- The agent MUST NOT access any other external website or domain, even if the provided website contains links, redirects, embedded content, third-party resources, suggested pages, or references to other websites.
- The agent MUST use the explicit user-provided external HTTPS website, URL, or domain only to extract factual information strictly useful for:
  - understanding the target company
  - understanding the role context
  - improving factual CV targeting
  - improving factual cover letter targeting
- The agent MUST keep external browsing strictly limited to the minimum necessary pages on that same exact user-provided external HTTPS domain.

#### 13.1.14 Outbound data prohibition for `bdelnoz/Emploi`

- This repository is strictly input-only regarding external internet usage.
- No repository content may be sent outside.
- The agent MUST NEVER submit forms, authenticate, upload files, send prompts, send repository content, send CV drafts, send cover letters, send logs, send extracted repository data, send environment variables, send secrets, or send any repository-derived information to any external service.
- HTTP write-capable behavior is forbidden for this repository, even if technically available in the environment.
- The agent MUST NEVER use external services to request opinions, reviews, AI analysis, third-party enrichment, or any other secondary processing of repository content.


#### 13.1.15 Mandatory stop rule for missing external information

- If the agent cannot find the required information on the exact user-provided external HTTPS website, URL, or domain, the agent MUST stop external processing immediately.
- The agent MUST NOT continue browsing externally.
- The agent MUST NOT access any other external website or domain.
- The agent MUST ask the user to provide another explicit external HTTPS source or to explicitly confirm that the task must continue without that missing external information.
- The agent MUST wait for the user decision before continuing the task.






## 14. 🎨 ARTISTIC CREATION MODE

### 14.1 Scope

- This mode applies when the user explicitly indicates an artistic intent, including but not limited to:
  - lyrics generation
  - song structure creation
  - prompt generation for AI tools (song, image, video)
  - storyboard creation
  - visual scene description
  - video assembly planning (e.g., FFmpeg timelines)
  - moodboard and artistic concept writing

- When this mode is activated, the agent MUST prioritize artistic output over scripting or technical automation behavior.

---

### 14.2 Activation rule

- This mode is activated when the user explicitly states or clearly implies:
  - "mode artistic"
  - "création artistique"
  - or any equivalent intent focused on creative production

- Once activated:
  - this section takes precedence over any conflicting scripting-oriented rules
  - all non-relevant scripting constraints MUST be ignored

---

### 14.3 Overridden rules in artistic mode

When artistic mode is active, the agent MUST IGNORE rules related to:

- CLI structure (`--help`, `--exec`, etc.)
- script execution logic
- sudo requirements
- installation and prerequisites handling
- system-level logging behavior
- runtime progress display for scripts
- script-specific file generation constraints (`./logs`, `./results`, etc.)

These rules are not applicable to artistic deliverables.

---

### 14.4 Artistic deliverable requirements

- The agent MUST produce **complete, ready-to-use outputs**, not partial drafts.

- Typical expected outputs include:
  - fully structured lyrics (Intro / Verse / Chorus / Bridge / Outro)
  - prompt blocks ready for direct copy-paste into external AI tools
  - storyboard sequences with scene descriptions
  - time-aligned visual plans (image ↔ timeline ↔ theme)
  - coherent artistic text aligned with requested tone

- Outputs MUST be:
  - directly usable
  - copy-paste ready
  - consistent in tone and structure

---

### 14.5 Tone and intensity control

- The agent MUST strictly follow the tone requested by the user:
  - aggressive, dark, violent, emotional, minimalistic, etc.

- The agent MUST NOT soften, censor, or dilute the artistic intent unless explicitly requested.

- The agent MUST maintain tone consistency across the entire output.

---

### 14.6 Source material handling

- If the user provides source material (Markdown, text, notes, transcripts):
  - the agent MUST use it as the primary base

- The agent MAY:
  - rephrase
  - restructure
  - intensify
  - stylize

- The agent MUST NOT:
  - fabricate factual claims presented as real
  - introduce false real-world information

- Artistic transformation is allowed, but must remain coherent with the source.

---

### 14.7 Output format rules

- When generating `.md` documents:
  - include mandatory metadata block (as defined in section 11.2)
  - ensure clean structure and readability

- No requirement for:
  - script headers
  - CLI documentation
  - execution instructions

- The focus is on **content quality and usability**, not execution.

---

### 14.8 Consistency rules

- All generated content MUST:
  - follow a single coherent artistic direction
  - avoid contradictions between sections
  - maintain narrative or emotional continuity

---

### 14.9 Definition of done (artistic tasks)

An artistic task is complete only if:

- the output is fully generated (not partial)
- the structure matches the expected format (lyrics, storyboard, etc.)
- the tone matches the user request
- the result is directly usable without additional transformation

---

### 14.10 Coexistence with standard mode

- Artistic mode does NOT remove or modify existing sections of this `AGENTS.md`.
- It only overrides non-relevant constraints when explicitly activated.

- If no artistic intent is detected, the agent MUST fall back to the default rules.
