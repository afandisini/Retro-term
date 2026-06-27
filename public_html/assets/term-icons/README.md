# Term Icons

Term Icons is a small icon pack for the Retro-term framework. It uses a curated set of SVG icons derived from Bootstrap Icons and exposes them through two outputs:

- `dist/retro-term-icons.css` and `dist/retro-term-icons.min.css` for CSS mask usage
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
<i class="rt rt-dashboard" aria-hidden="true"></i>
```

Use `rt` plus the matching `rt-*` icon class.

## Notes

- Icons use the `rt-*` prefix in the framework, with `term-icon-*` kept only as a legacy alias in the generated CSS.
- The generated outputs are local to the repository and do not depend on Bootstrap Icons CDN.
- Keep the MIT notice when redistributing derived icons.
