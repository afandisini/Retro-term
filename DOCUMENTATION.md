# Retro-term CSS Documentation

Retro-term CSS is a retro-modern UI framework for building admin dashboards, landing pages, and component demos with a consistent visual system.

## Overview

The project currently uses a simple repository structure:

- `index.html`
- `login.html`
- `retro-term.css`
- `retro-term.min.css`
- `retro-term.js`
- `example/`
- `assets/term-icons/`
- `sass/`

The framework focuses on:

- flat UI styling
- responsive dashboard layout
- light and dark themes
- reusable UI components
- static demo pages

## Core Files

### `retro-term.css`

Main stylesheet for the framework. It contains:

- layout system
- buttons
- cards and panels
- forms
- tables
- popups
- dropdowns
- badges
- alerts
- typography
- admin dashboard UI

### `retro-term.min.css`

Minified production version of the stylesheet.

### `retro-term.js`

Default JavaScript helper for demo interactions:

- theme toggle
- mobile sidebar open and close
- dropdown menus
- popup open and close
- toast demo behavior
- table search and pagination demo behavior

## Demo Pages

The `example/` folder contains the component and layout demos:

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

These pages are meant to show how each component should look and behave.

## Setup

### Install dependencies

```bash
npm install
```

### Build CSS

```bash
npm run build:css
```

### Watch changes

```bash
npm run watch:css
```

## HTML Usage

### Basic include

```html
<link rel="stylesheet" href="retro-term.css">
<script src="retro-term.js" defer></script>
```

### Icon set

```html
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

## Component Notes

### Buttons

Use `rt-tbl` for action buttons.

Common variants:

- `rt-tbl--primary`
- `rt-tbl--secondary`
- `rt-tbl--success`
- `rt-tbl--warning`
- `rt-tbl--danger`
- `rt-tbl--accent`
- `rt-tbl--purple`
- `rt-tbl--ghost`
- `rt-tbl--outline`

Common sizes:

- `rt-tbl--sm`
- `rt-tbl--lg`
- `rt-tbl--icon`

### Badges

Use `rt-badge` for compact labels and status indicators.

### Popup

Popup markup uses `rt-pp` and size modifiers such as:

- `rt-pp--sm`
- `rt-pp--md`
- `rt-pp--lg`
- `rt-pp--xl`
- `rt-pp--fullscreen`

### Table

Tables support:

- search
- pagination
- responsive layout
- demo filtering

### Forms

Inputs, selects, textareas, checkboxes, and helper text follow the same UI language across the framework.

## JavaScript Behavior

The default JS supports:

- `#themeToggle`
- `#menuBtn`
- `#sidebar`
- `#sidebarOverlay`
- `[data-sd]`
- `[data-dd]`
- `[data-dd-trigger]`
- `[data-pp-open]`
- `[data-pp-close]`
- `#demoToast`
- `#tableSearch`

## Path Guidance

### Root pages

Use root-relative links when the file lives in the project root:

```html
<a href="login.html">Login</a>
<a href="example/doc.html">Documentation</a>
```

### Example pages

Use `../` when linking back to root from `example/`:

```html
<a href="../index.html">Home</a>
<link rel="stylesheet" href="../retro-term.css">
<script src="../retro-term.js" defer></script>
```

## Framework Integration

### Plain HTML

Copy the CSS and JS files into your site and link them directly.

### Node.js

Serve the files from a public folder.

### Vue

Place the files in `public/` or import the CSS through the build pipeline.

### Nuxt

Register the CSS and JS in `nuxt.config.ts` or serve them from `public/`.

### Laravel

Use `public/` plus `asset()` helpers, or import the CSS through Vite.

### CodeIgniter

Use `base_url()` for asset paths from the `public/` folder.

## Troubleshooting

- If CSS does not load, verify the path.
- If icons do not appear, check `assets/term-icons/dist/`.
- If popup behavior fails, ensure `retro-term.js` is loaded.
- If a page is in a subfolder, update relative paths accordingly.

## Maintenance Notes

- Keep the `rt-...` class namespace unchanged.
- Update documentation whenever new demo pages or components are added.
- Prefer static, reproducible examples in the `example/` folder.
