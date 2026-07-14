# Retro-term CSS Documentation

Retro-term is a standalone retro-modern CSS framework for admin panels, dashboards, landing pages, documentation sites, auth flows, and terminal-style interfaces.

No Bootstrap. No Tailwind. No external UI dependency.

---

## 1. Getting Started

### Install

```bash
npm install retro-term-css
```

```bash
pnpm add retro-term-css
```

```bash
yarn add retro-term-css
```

### Use via jsDelivr through npm

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/retro-term-css@2.1.0/dist/retro-term.min.css"
/>
<script
  src="https://cdn.jsdelivr.net/npm/retro-term-css@2.1.0/dist/retro-term.min.js"
></script>
```

The `/npm/` URL becomes available after `retro-term-css@2.1.0` is published to the npm registry. For production usage, prefer a pinned version such as `@2.1.0`.

### Use via jsDelivr through GitHub

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/afandisini/Retro-term@v2.1.0/dist/retro-term.min.css"
/>
<script
  src="https://cdn.jsdelivr.net/gh/afandisini/Retro-term@v2.1.0/dist/retro-term.min.js"
></script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/afandisini/Retro-term@v2.1.0/dist/retro-term-icons.css"
/>
```

### Use via NPM

```js
import "retro-term-css/css";
import "retro-term-css/js";
import "retro-term-css/icons";
```

### Base Template

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Retro-term</title>
    <link rel="stylesheet" href="dist/retro-term.min.css" />
    <link rel="stylesheet" href="dist/retro-term-icons.css" />
  </head>
  <body>
    <main class="rt-container rt-py4">
      <h1>Hello Retro-term</h1>
      <button class="rt-btn rt-anishow rt-anishow rt-btn-primary">
        Primary Action
      </button>
    </main>
    <script src="dist/retro-term.min.js" defer></script>
  </body>
</html>
```

---

## 2. Layout System

### Admin Shell

```html
<div class="rt-admin">
  <div class="rt-sbr-overlay" id="sidebarOverlay"></div>

  <aside class="rt-sbr" id="sidebar">
    <div class="rt-sbr-brand">
      <span class="rt-brand-dot"></span>
      <span>Retro-term</span>
    </div>

    <nav class="rt-sbr-nav">
      <a class="rt-sbr-link is-active" href="#">
        <i class="rt rt-dashboard"></i>
        Dashboard
      </a>
    </nav>
  </aside>

  <main class="rt-main">
    <div class="rt-topbar">
      <button class="rt-topbar-menu-tbl" id="menuBtn" aria-label="Menu">
        <i class="rt rt-menu"></i>
      </button>
      <h1 class="rt-topbar-title">Dashboard</h1>
    </div>

    <section class="rt-content">Content</section>
  </main>
</div>
```

### Key Layout Classes

- `rt-admin`
- `rt-sbr`
- `rt-sbr-overlay`
- `rt-sbr-brand`
- `rt-sbr-nav`
- `rt-sbr-link`
- `rt-sbr-badge`
- `rt-sbr-footer`
- `rt-main`
- `rt-topbar`
- `rt-topbar-title`
- `rt-topbar-search`
- `rt-topbar-actions`
- `rt-topbar-icon-tbl`
- `rt-topbar-dot`
- `rt-content`

---

## 3. Grid and Utilities

### Grid

```html
<div class="rt-row rt-g-3">
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">A</div>
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">B</div>
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">C</div>
</div>
```

### Utility Families

- Spacing: `rt-m0` to `rt-m6`, `rt-p0` to `rt-p6`, `rt-mx-auto`, `rt-ml-auto`, `rt-mr-auto`
- Flow and gap: `rt-flow`, `rt-flow--sm`, `rt-flow--lg`, `rt-gap-*`, `rt-gap-x-*`, `rt-gap-y-*`
- Flex and alignment: `rt-flex`, `rt-flex-col`, `rt-flex-wrap`, `rt-items-*`, `rt-flex-between`, `rt-justify-*`
- Display and sizing: `rt-d-block`, `rt-d-inline-flex`, `rt-grid`, `rt-grid-auto-fit`, `rt-grid-auto-fill`, `rt-w-full`, `rt-h-full`
- Text and surfaces: `rt-text-left`, `rt-text-center`, `rt-text-right`, `rt-surface`, `rt-surface-muted`, `rt-divider`
- Shape helpers: `rt-round`, `rt-round-sm`, `rt-round-lg`, `rt-round-full`
- Accessibility: `rt-sr-only`

---

## 4. Typography

- `rt-text-lead`
- `rt-text-muted`
- `rt-text-small`
- `rt-link`

```html
<p class="rt-text-lead">Lead text.</p>
<p class="rt-text-muted">Muted text.</p>
<a class="rt-link" href="#">Read more</a>
```

---

## 5. Buttons

### Canonical Classes

- `rt-btn`
- `rt-btn-primary`
- `rt-btn-secondary`
- `rt-btn-success`
- `rt-btn-warning`
- `rt-btn-danger`
- `rt-btn-accent`
- `rt-btn-purple`
- `rt-btn-ghost`
- `rt-btn-outline-primary`
- `rt-btn-outline`
- `rt-btn-sm`
- `rt-btn-lg`
- `rt-btn-icon`
- `rt-btn-block`
- `rt-btn-group`
- `rt-btn-group--nowrap`

### Loading State

```html
<button
  class="rt-btn rt-anishow rt-anishow rt-btn-primary is-loading"
  type="button"
>
  <span class="rt-spinner is-active"></span>
  <span>Processing</span>
</button>
```

`is-loading` is the canonical hook for button loading behavior.

---

## 6. Forms

### Canonical Classes

- `rt-form-group`
- `rt-form-label`
- `rt-form-input`
- `rt-form-select`
- `rt-form-textarea`
- `rt-form-check`
- `rt-form-message`
- `rt-form-icon`
- `rt-form-stack`
- `rt-form-grid`
- `rt-form-grid--2`

### Searchable Select

`select.rt-form-select` is enhanced by the stock JS into:

- `rt-select`
- `rt-select-toggle`
- `rt-select-value`
- `rt-select-caret`
- `rt-select-menu`
- `rt-select-search-input`
- `rt-select-list`
- `rt-select-option`

---

## 7. Cards and Content Blocks

- `rt-card`
- `rt-card-header`
- `rt-card-title`
- `rt-card-subtitle`
- `rt-card-actions`
- `rt-card-body`
- `rt-card-body-flush`
- `rt-card-footer`

---

## 8. Tables and Data Display

### Table Classes

- `rt-table-wrap`
- `rt-table`
- `rt-table-toolbar`
- `rt-table-search`
- `rt-table-info`
- `rt-table-pagination`
- `rt-table-pagination-info`
- `rt-table-pagination-nav`
- `rt-table-pagination-btn`
- `rt-table-pagination-text`
- `rt-table-user`
- `rt-table-avatar`
- `rt-table-name`
- `rt-table-email`

### Supporting Data UI

- `rt-badge`
- `rt-badge--primary`
- `rt-badge--success`
- `rt-badge--warning`
- `rt-badge--danger`
- `rt-badge-dot`
- `rt-progress`
- `rt-progress-bar`
- `rt-progress-fill`

---

## 9. Feedback and Loading

### Feedback

- `rt-alert`
- `rt-alert-icon`
- `rt-alert-content`
- `rt-alert-title`
- `rt-alert-text`
- `rt-alert--primary`
- `rt-alert--success`
- `rt-alert--warning`
- `rt-alert--danger`
- `rt-toast`
- `rt-toast-icon`
- `rt-toast-content`
- `rt-toast-title`
- `rt-toast-text`
- `rt-toast-close`

### Loading

- `rt-spinner`
- `rt-skeleton-page`
- `rt-skeleton-card`
- `rt-skeleton-line`
- `rt-skeleton-title`
- `rt-skeleton-button`
- `rt-skeleton-input`
- `rt-skeleton-cell`
- `rt-skeleton-avatar`
- `rt-skeleton-chart`
- `rt-skeleton-grid`
- `rt-skeleton-row`
- `rt-skeleton-table`
- `rt-skeleton-stepper`

`rt-spinner` is the framework-level rounded spinner primitive.

---

## 10. Navigation and Dropdowns

- `rt-navbar`
- `rt-navbar--scrolled`
- `rt-navbar-container`
- `rt-navbar-brand`
- `rt-navbar-brand-dot`
- `rt-navbar-menu`
- `rt-navbar-link`
- `rt-navbar-actions`
- `rt-navbar-rt-btn`
- `rt-navbar-toggle`
- `rt-navbar--transparent`
- `rt-navbar--dark`
- `rt-dropdown`
- `rt-dropdown-menu`
- `rt-dropdown-item`
- `rt-dropdown-item--danger`
- `rt-dropdown-divider`
- `rt-dropdown-label`
- `rt-nav-dropdown`
- `rt-nav-dropdown-toggle`
- `rt-nav-dropdown-menu`
- `rt-nav-dropdown-item`

---

## 11. Modal

- `rt-modal`
- `rt-modal-content`
- `rt-modal-dialog`
- `rt-modal-sm`
- `rt-modal-md`
- `rt-modal-lg`
- `rt-modal-xl`
- `rt-modal-fullscreen`
- `rt-modal-header`
- `rt-modal-title`
- `rt-modal-subtitle`
- `rt-modal-body`
- `rt-modal-footer`
- `rt-modal-close`
- `rt-modal-embed`
- `rt-modal-embed--map`
- `rt-modal-embed--video`

---

## 12. Widgets

### Accordion and Carousel

- `rt-accordion`
- `rt-accordion-item`
- `rt-accordion-trigger`
- `rt-accordion-icon`
- `rt-accordion-content`
- `rt-accordion-body`
- `rt-accordion--flush`
- `rt-carousel`
- `rt-carousel-track`
- `rt-carousel-slide`
- `rt-carousel-caption`
- `rt-carousel-title`
- `rt-carousel-text`
- `rt-carousel-btn`
- `rt-carousel-btn--prev`
- `rt-carousel-btn--next`
- `rt-carousel-indicators`
- `rt-carousel-indicator`
- `rt-carousel--card`
- `rt-carousel--thumb`

### Dashboard Widgets

- `rt-chart`
- `rt-chart-svg`
- `rt-activity`
- `rt-activity-item`
- `rt-i-activity`
- `rt-activity-content`
- `rt-activity-text`
- `rt-activity-time`
- `rt-quick`
- `rt-quick-btn`

---

## 13. Terminal Components

Retro-term now includes terminal-native presentation primitives.

- `rt-terminal-window`
- `rt-terminal-header`
- `rt-terminal-title`
- `rt-terminal-controls`
- `rt-terminal-dot`
- `rt-terminal-dot--danger`
- `rt-terminal-dot--warning`
- `rt-terminal-dot--success`
- `rt-terminal-toolbar`
- `rt-terminal-pill`
- `rt-terminal-body`
- `rt-terminal-line`
- `rt-terminal-prompt`
- `rt-terminal-command`
- `rt-terminal-response`
- `rt-terminal-response--success`
- `rt-terminal-response--warning`
- `rt-terminal-response--danger`
- `rt-terminal-kbd`
- `rt-terminal-grid`
- `rt-terminal-card`
- `rt-terminal-card-title`
- `rt-terminal-card-text`

```html
<div class="rt-terminal-window">
  <div class="rt-terminal-header">
    <div class="rt-terminal-title">
      <i class="rt rt-terminal"></i>
      RETRO-TERM SHELL
    </div>
  </div>
  <div class="rt-terminal-body">
    <div class="rt-terminal-line">
      <span class="rt-terminal-prompt">$</span>
      <span class="rt-terminal-command">npm run build</span>
      <span class="rt-terminal-response rt-terminal-response--success"
        >Assets updated successfully.</span
      >
    </div>
  </div>
</div>
```

---

## 14. Landing and Auth

- `rt-landing`
- `rt-hero`
- `rt-hero-shape`
- `rt-hero-content`
- `rt-hero-badge`
- `rt-hero-title`
- `rt-hero-subtitle`
- `rt-hero-actions`
- `rt-feature-grid`
- `rt-feature-card`
- `rt-feature-icon`
- `rt-feature-title`
- `rt-feature-desc`
- `rt-section`
- `rt-section-alt`
- `rt-section-header`
- `rt-stats-grid`
- `rt-stat-card`
- `rt-stat-value`
- `rt-stat-label`
- `rt-cta`
- `rt-cta-actions`
- `rt-footer`
- `rt-footer-grid`
- `rt-footer-brand`
- `rt-footer-links`
- `rt-footer-bottom`
- `rt-theme-toggle`
- `rt-login-page`
- `rt-login-wrapper`
- `rt-login-card`
- `rt-login-header`
- `rt-login-logo`
- `rt-login-subtitle`
- `rt-login-form`
- `rt-login-options`
- `rt-login-divider`
- `rt-login-social`
- `rt-login-footer`
- `rt-input-wrapper`
- `rt-input-icon`
- `rt-input-search-wrapper`
- `rt-user-cell`
- `rt-avatar-sm`
- `rt-pagination`

---

## 15. Icons

Retro-term icon CSS is generated from the full local SVG catalog in `assets/term-icons/src/icons`.

Usage pattern:

```html
<i class="rt rt-dashboard" aria-hidden="true"></i>
<i class="rt rt-bell" aria-hidden="true"></i>
<i class="rt rt-window-split" aria-hidden="true"></i>
```

Key points:

- Base class: `rt`
- Size helpers: `rt-sm`, `rt-lg`, `rt-xl`
- The icon catalog is generated, not manually limited
- Output files: `dist/retro-term-icons.css` and `dist/retro-term-icons.min.css`

---

## 16. JavaScript Hooks

- `id="themeToggle"`
- `id="menuBtn"`
- `id="sidebar"`
- `id="sidebarOverlay"`
- `data-rt-dropdown`
- `data-rt-dropdown-trigger`
- `data-rt-modal-open`
- `data-rt-modal-close`
- `data-rt-nav-dropdown`

Load `retro-term.min.js` with `defer` and keep `data-theme` on `<html>`.

---

## 17. Sass Build

### Source Order

```scss
@use "variables";
@use "base";
@use "typography";
@use "icons";
@use "utilities";
@use "grid";
@use "layout";
@use "buttons";
@use "popup";
@use "feedback";
@use "dropdown";
@use "table";
@use "widgets";
@use "components";
@use "landing";
@use "responsive";
```

### Build Commands

```bash
npm run build:css
npm run build:icons
npm run build
```

### Output Files

- `dist/retro-term.css`
- `dist/retro-term.min.css`
- `dist/retro-term.js`
- `dist/retro-term.min.js`
- `dist/retro-term-icons.css`
- `dist/retro-term-icons.min.css`

---

## 18. Example Inventory

- `example/dashboard.html`
- `example/landing-page.html`
- `example/login.html`
- `example/crud-table.html`
- `example/components-demo.html`
- `example/doc.html`

---

## 19. Browser Support

Retro-term targets modern evergreen browsers with support for:

- CSS variables
- Flexbox and Grid
- `backdrop-filter`
- `prefers-reduced-motion`

---

## 20. License

MIT
