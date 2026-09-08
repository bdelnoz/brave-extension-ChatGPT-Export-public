# ChatGPT Export @NoXoZ.be - v6.0.0

Browser extension for Brave / Chromium that exports ChatGPT conversations and complete ChatGPT Projects into structured local Markdown ZIP archives.

## Why this project exists

I created ChatGPT Export because I consider complete, portable export of a full ChatGPT conversation or a complete ChatGPT Project to be a capability that is genuinely missing from the standard ChatGPT interface.

The extension is intended to fill that gap with a local-first workflow: readable Markdown, structured ZIP archives, Project indexes, and optional bundling of associated files.

ChatGPT Export is an independent project created by NoXoZ.be. It is **not affiliated with, endorsed by, sponsored by, or developed by [OpenAI](https://openai.com/)**.

## Features

- Full Chat export
- Full Project export
- Export From Start / Export From End
- Project `INDEX.md`
- Uploaded-file inventory and optional export to `Upload/`
- Assistant downloadable-file inventory and optional export to `Download/`
- Mini / Maxi / Developer modes
- Local ZIP + Markdown workflow
- No analytics or telemetry

## Full Chat structure

```text
ChatName__export_YYYY-MM-DD-HH-MM-SS.zip
`-- ChatName__export_YYYY-MM-DD-HH-MM-SS/
    |-- ChatName__export_YYYY-MM-DD-HH-MM-SS.md
    |-- Upload/
    `-- Download/
```

## Full Project structure

```text
Full Project - ProjectName__export_....zip
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

### Maxi

- Export Full Project
- Export Uploaded Files
- Export Downloaded Files
- Export Full Chat
- Export From Start
- Export From End
- Start Export

### Mini

- FULL / START / END
- PROJECT
- UPLOAD FILES
- DOWNLOAD FILES
- Start Export

Blue = enabled/selected. Gray = disabled/not selected.

## Installation

See [`INSTALL.md`](INSTALL.md).

## Documentation

- [Product Guide](ChatGPT-Export_v6.0.0_Product_Guide.pdf)
- [Privacy](PRIVACY.md)
- [Security](SECURITY.md)
- [License](LICENSE)
- [Changelog](CHANGELOG.md)

## License

ChatGPT Export is proprietary and source-available under the **NoXoZ Personal License v1.0**.

The public repository allows source inspection and authorized personal, non-commercial use of the official unmodified release. Redistribution, republishing, commercial exploitation, independent store publication, rebranding, and modified public releases require prior written authorization from the Licensor.

See [`LICENSE`](LICENSE) for the complete terms.

## Author

NoXoZ.be  
Bruno DELNOZ
