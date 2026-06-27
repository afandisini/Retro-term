# Retro-term CSS

Retro-term CSS is a retro-modern UI framework for admin dashboards, landing pages, documentation pages, and form-driven interfaces.

## Preview

![Front Page Preview](assets/images/front_page.png)

![Admin Panel Preview](assets/images/admin_panel.png)

![Login Page Preview](assets/images/login_page.png)

## What You Get

- `retro-term.css` / `retro-term.min.css` - Core styles
- `retro-term-components.js` - Interactive components (Accordion, Carousel, Navbar)
- `retro-term.js` - Core JavaScript utilities
- npm-ready `dist/` build artifacts
- demo pages in `example/`
- reusable UI components

### New Components (v1.1+)

✅ **Accordion** - Collapsible content sections with optional multiple-open mode
✅ **Carousel** - Image slider with touch support, autoplay, and keyboard navigation
✅ **Navbar** - Responsive navigation bar with mobile menu toggle

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
|   |-- modal.html
|   |-- table.html
|   |-- toast.html
|   `-- typography.html
|-- assets/
|   |-- images/
|   |   |-- admin_panel.png
|   |   |-- front_page.png
|   |   `-- login_page.png
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
- Bootstrap-like grid system with `rt-container`, `rt-row`, and `rt-col-*`
- Modal, dropdown, toast, accordion, carousel, and navbar components
- Table demo with search and pagination
- Documentation page for all UI elements
- Touch-friendly mobile interactions
- Keyboard navigation support

## Quick Start

### Include the files

```html
<!-- Core styles -->
<link rel="stylesheet" href="dist/retro-term.css">
<!-- OR minified version -->
<link rel="stylesheet" href="dist/retro-term.min.css">

<!-- Core JavaScript -->
<script src="dist/retro-term.js" defer></script>

<!-- Interactive components (Accordion, Carousel, Navbar) -->
<script src="dist/retro-term-components.js" defer></script>

<!-- Icons -->
<link rel="stylesheet" href="dist/retro-term-icons.css">
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
<button class="btn btn-primary">Save</button>
<button class="btn btn-secondary">Cancel</button>

<span class="rt-badge rt-badge--success">
  <span class="rt-badge_dot"></span>
  Active
</span>
```

## Install via npm

### npm

```bash
npm install retro-term-css
```

If you publish the unscoped package to npm, use:

```bash
npm publish --access public
```

If you later switch to a scoped name like `@afandisini/retro-term-css`, keep `--access public` for the first public release.

### pnpm

```bash
pnpm add retro-term-css
```

### Vue

Import in `src/main.js` or `src/main.ts`:

```js
import 'retro-term-css/css'
import 'retro-term-css/js'
```

Or import directly from `dist/`:

```js
import 'retro-term-css/dist/retro-term.min.css'
import 'retro-term-css/dist/retro-term.js'
```

### React / Vite

Import in `src/main.jsx` or `src/main.tsx`:

```jsx
import 'retro-term-css/css'
import 'retro-term-css/js'
```

Or import directly from `dist/`:

```jsx
import 'retro-term-css/dist/retro-term.min.css'
import 'retro-term-css/dist/retro-term.js'
```

### Nuxt

Add CSS in `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  css: ['retro-term-css/css']
})
```

If you need the helper JavaScript, load it in a client-only plugin.

### Next.js App Router

Import CSS in `app/layout.jsx` or `app/layout.tsx`:

```jsx
import 'retro-term-css/css'
```

If you need the helper JavaScript, import it in a client component:

```jsx
'use client'

import 'retro-term-css/js'
```

## JavaScript Helper

`retro-term.js` handles:

- theme toggle
- mobile sidebar
- dropdowns
- modals
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
- `example/modal.html`
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

## Component Examples

### Accordion

```html
<div class="rt-accordion">
  <div class="rt-accordion-item">
    <button class="rt-accordion-trigger">
      <span>Section Title</span>
      <svg class="rt-accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div class="rt-accordion-content">
      <div class="rt-accordion-body">
        Your content here...
      </div>
    </div>
  </div>
</div>
```

For multiple open items at once, add `rt-accordion--multiple` to the parent.

### Carousel

```html
<div class="rt-carousel" data-autoplay="5000">
  <div class="rt-carousel-track">
    <div class="rt-carousel-slide">
      <img src="image1.jpg" alt="Slide 1">
      <div class="rt-carousel-caption">
        <h3 class="rt-carousel-title">Title</h3>
        <p class="rt-carousel-text">Description</p>
      </div>
    </div>
  </div>
  
  <button class="rt-carousel-btn rt-carousel-btn--prev">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
  <button class="rt-carousel-btn rt-carousel-btn--next">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>
  
  <div class="rt-carousel-indicators">
    <button class="rt-carousel-indicator is-active"></button>
    <button class="rt-carousel-indicator"></button>
  </div>
</div>
```

Features:
- Touch/swipe support for mobile
- Keyboard navigation (Arrow keys)
- Autoplay with `data-autoplay` attribute
- Pause on hover

### Navbar

```html
<nav class="rt-navbar">
  <div class="rt-navbar-container">
    <a href="#" class="rt-navbar-brand">
      <span class="rt-navbar-brand-dot"></span>
      Brand
    </a>
    
    <button class="rt-navbar-toggle">
      <span></span>
      <span></span>
      <span></span>
    </button>
    
    <div class="rt-navbar-menu">
      <a href="#" class="rt-navbar-link is-active">Home</a>
      <a href="#" class="rt-navbar-link">About</a>
      <a href="#" class="rt-navbar-link">Contact</a>
    </div>
  </div>
</nav>
```

Variants:
- `rt-navbar--transparent` - Transparent background
- `rt-navbar--dark` - Dark theme
- Auto scroll effect adds shadow on scroll

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | Last 2  |
| Firefox | Last 2  |
| Safari  | Last 2  |
| Edge    | Last 2  |

## File Size

- `retro-term.min.css`: ~62 KB (full build with all components)
- `retro-term-components.js`: ~8 KB

## License

MIT License - See [LICENSE](LICENSE) for details.
