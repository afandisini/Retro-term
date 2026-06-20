# Retro-term CSS

Retro-term CSS is a retro-modern UI framework for admin dashboards, landing pages, documentation pages, and form-driven interfaces.

## What You Get

- `retro-term.css`
- `retro-term.min.css`
- `retro-term.js`
- demo pages in `example/`
- reusable UI components

## Project Structure

```text
framework_css_retro/
|-- index.html
|-- login.html
|-- retro-term.css
|-- retro-term.min.css
|-- retro-term.js
|-- example/
|   |-- badge.html
|   |-- buttons.html
|   |-- color.html
|   |-- dashboard.html
|   |-- doc.html
|   |-- input.html
|   |-- popup.html
|   |-- table.html
|   |-- toast.html
|   `-- typography.html
|-- assets/
|   `-- term-icons/
|       `-- dist/
|-- sass/
|-- README.md
|-- DOCUMENTATION.md
`-- CHANGELOG.md
```

## Features

- Light and dark theme support
- Flat retro-modern UI language
- Responsive admin dashboard layout
- Popup, dropdown, and toast helpers
- Table demo with search and pagination
- Documentation page for all UI elements

## Quick Start

### Include the files

```html
<link rel="stylesheet" href="retro-term.css">
<script src="retro-term.js" defer></script>
<link rel="stylesheet" href="assets/term-icons/dist/term-icons.css">
```

### Base markup

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retro-term</title>
  </head>
  <body>
    ...
  </body>
</html>
```

### Example components

```html
<button class="rt-tbl rt-tbl--primary">Save</button>
<button class="rt-tbl rt-tbl--secondary">Cancel</button>

<span class="rt-badge rt-badge--success">
  <span class="rt-badge_dot"></span>
  Active
</span>
```

## JavaScript Helper

`retro-term.js` handles:

- theme toggle
- mobile sidebar
- dropdowns
- popups
- toast demo
- table search and pagination demo

## Build

Install dependencies:

```bash
npm install
```

Build CSS:

```bash
npm run build:css
```

Watch Sass:

```bash
npm run watch:css
```

## Installation Guide

### Plain HTML / PHP / Static Hosting

Use direct relative or root-relative paths:

```html
<link rel="stylesheet" href="retro-term.css">
<script src="retro-term.js" defer></script>
```

If the page is inside `example/`:

```html
<link rel="stylesheet" href="../retro-term.css">
<script src="../retro-term.js" defer></script>
```

### Node.js

Serve the files from a public folder:

```js
app.use(express.static('public'));
```

### Vue.js

Place the assets in `public/` or import the CSS through the Vue build pipeline.

### Nuxt

Load the CSS and JS from `public/` or register them in `nuxt.config.ts`.

### Laravel

Use `public/` and Blade helpers:

```blade
<link rel="stylesheet" href="{{ asset('retro-term.css') }}">
<script src="{{ asset('retro-term.js') }}" defer></script>
```

### CodeIgniter

Use `base_url()` for assets:

```php
<link rel="stylesheet" href="<?= base_url('retro-term.css') ?>">
<script src="<?= base_url('retro-term.js') ?>" defer></script>
```

### Other Frameworks

Retro-term CSS also works with:

- React
- Next.js
- Svelte
- Astro
- Alpine.js
- PHP native

The simplest approach is to place the files in a public/static folder and load them in your layout.

## Demo Pages

Reference pages live in `example/`:

- `example/dashboard.html`
- `example/doc.html`
- `example/buttons.html`
- `example/badge.html`
- `example/popup.html`
- `example/toast.html`
- `example/table.html`
- `example/input.html`
- `example/typography.html`
- `example/color.html`

## Notes

- Keep the `rt-...` namespace unchanged.
- Update paths when a page moves between root and subfolders.
- Use the demo pages as reference for structure and behavior.

## License

MIT. See [LICENSE](LICENSE).
