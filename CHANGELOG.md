# Changelog

Notable changes to the project. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and versions follow
[semantic versioning](https://semver.org/).

## [Unreleased]

### Added

- A filter on the home page to find a document by name or abbreviation.
- A copy button next to the submission email.
- A "What it must include" checklist on each document page.
- Larger, sharper sample images that open full size.
- A per-state table of supplier waiver templates that turns into cards on phones.
- Light and dark themes that follow the system and remember the visitor's choice.
- A 404 page.

### Changed

- Rebuilt the site from scratch with a modern layout that works on phones.
- Form W-9 now links the official IRS form instead of a copy.
- The supplier affidavit and supplier waiver templates download straight from the site, as PDF,
  instead of opening Google Drive.
- The previous URLs (`pages/w9.html` and the rest) redirect to their new pages.
- Pages load faster: optimized images and no third-party scripts or fonts.

### Removed

- The payments page, which was no longer linked from the site.

### Fixed

- The breadcrumb of the W-9 page pointed to General Liability.
- The Oregon final waivers downloaded the Oklahoma templates.

## 1.0.0 - 2023-01-26

### Added

- First version of the portal with the six required documents.

[Unreleased]: https://github.com/M1gu3l4ngel/paymentdocs-repository/commits/main
