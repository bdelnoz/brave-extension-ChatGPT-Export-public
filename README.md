# ChatGPT Export by NoXoZ.be - v6.0.0

> Independent project. Not affiliated with, endorsed by, sponsored by, or officially connected to OpenAI. Author: Bruno DELNOZ / NoXoZ.be.

Independent Brave / Chromium extension for exporting ChatGPT conversations and complete ChatGPT Projects into structured Markdown ZIP archives.

## What it does

- Exports the current ChatGPT conversation as a structured ZIP.
- Exports an entire ChatGPT Project into a single ZIP.
- Creates readable Markdown files.
- Creates one folder per chat.
- Keeps the chat Markdown beside its `Upload/` and `Download/` folders.
- Creates a project `INDEX.md`.
- Inventories uploaded files and Assistant-proposed download files.
- Optionally copies retrievable User-uploaded files into `Upload/`.
- Optionally copies retrievable Assistant downloadable files into `Download/`.
- Provides Mini, Maxi and Developer UI modes.
- Works locally in the browser with no NoXoZ.be backend, no telemetry and no analytics.

## Full Chat ZIP structure

```text
ChatName__export_YYYY-MM-DD-HH-MM-SS.zip
`-- ChatName__export_YYYY-MM-DD-HH-MM-SS/
    |-- ChatName__export_YYYY-MM-DD-HH-MM-SS.md
    |-- Upload/
    `-- Download/
```

## Full Project ZIP structure

```text
Full Project - ProjectName__export_YYYY-MM-DD-HH-MM-SS.zip
|-- INDEX.md
|-- Project - ProjectName - Chat01__export_.../
|   |-- Project - ProjectName - Chat01__export_....md
|   |-- Upload/
|   `-- Download/
`-- Project - ProjectName - Chat02__export_.../
    |-- Project - ProjectName - Chat02__export_....md
    |-- Upload/
    `-- Download/
```

## Controls

### Maxi mode

- `Export Full Project`
- `Export Uploaded Files`
- `Export Downloaded Files`
- `Export Full Chat`
- `Export From Start`
- `Export From End`
- `Start Export`

### Mini mode

- `FULL`
- `START`
- `END`
- `PROJECT`
- `UPLOAD FILES`
- `DOWNLOAD FILES`
- `Start Export`

Blue means enabled/selected. Gray means disabled/not selected.

## License

See `LICENSE.md`.

## Privacy and security

See `PRIVACY.md` and `SECURITY.md`.

## Product guide

See `ChatGPT-Export_v6.0.0_Product_Guide.pdf`.
