# Term Icons

Term Icons is a small icon pack for the Retro-term framework. It uses a curated set of SVG icons derived from Bootstrap Icons and exposes them through two outputs:

- `dist/term-icons.css` and `dist/term-icons.min.css` for CSS mask usage
- `dist/term-icons.svg` is still generated for compatibility, but the framework demo uses CSS mask icons

## Structure

```text
assets/term-icons/
|-- src/icons/
|-- dist/
|-- scripts/
|-- demo/
|-- LICENSE
|-- NOTICE.md
`-- README.md
```

## Build

From `assets/term-icons`:

```bash
npm run icons:build
```

Or from the project root:

```bash
npm --prefix assets/term-icons run icons:build
```

## Usage

CSS mask:

```html
<i class="rt-icon term-icon-dashboard" aria-hidden="true"></i>
```

Wrap the icon with `rt-icon` and choose any `term-icon-*` modifier.

## Notes

- Icons use the `term-icon-*` prefix, wrapped by `rt-icon` in the framework.
- The generated outputs are local to the repository and do not depend on Bootstrap Icons CDN.
- Keep the MIT notice when redistributing derived icons.
