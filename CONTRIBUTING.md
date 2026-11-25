# Contributing

Thank you for helping. This repository holds the documentation portal Stout publishes for its
subcontractors and suppliers. Changes come from Stout staff and people Stout authorizes; see the
[license](LICENSE).

## Before you start

- **A typo, a broken link or a small fix:** open a pull request directly.
- **A new document, a change to a requirement or to the structure:** open an issue first. What a
  document requires is a business decision, so it is agreed with Stout before it is written.
- **A vulnerability:** never in a public issue; follow [`SECURITY.md`](SECURITY.md).
- **Conduct:** everyone who takes part follows the [code of conduct](CODE_OF_CONDUCT.md).

## Set up

It needs Node.js, pnpm and Git; the [README](README.md#getting-started) explains how to install
them. From the repository root, as a normal user:

```bash
pnpm install
pnpm check
pnpm format:check
pnpm build
pnpm check:links
```

The checks are the same ones CI runs.

## What a change has to keep

- **Nothing personal:** no personal email, phone number or account. The contact is
  `documents@stoutllc.com`.
- **English only:** the site and the documents of this repository are in English.
- **One place per fact:** each document's text lives in its Markdown file; pages never repeat it.
- **Strict TypeScript:** `pnpm check` passes with no errors, warnings or hints.
- **Old links keep working:** a page that moves leaves a redirect in `public/`.

## Commits and pull requests

- Commits follow [Conventional Commits](https://www.conventionalcommits.org/): `type(scope): summary`
  in English and in the imperative, up to 72 characters, with a body that lists each concrete
  change.
- A pull request does one thing and fills in its template. A change people notice adds its line
  under "Unreleased" in [`CHANGELOG.md`](CHANGELOG.md).
- CI has to pass: type check, formatting, build and internal link check.

## License

By contributing, you agree that your contribution becomes the property of Stout Building
Contractors under the [license](LICENSE) of the repository.
