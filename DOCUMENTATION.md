# Retro-term CSS Documentation

Retro-term is a standalone retro-modern CSS framework for admin panels, dashboards, landing pages, documentation sites, and auth flows.

No Bootstrap. No Tailwind. No external UI dependency.

---

## 1. Getting Started

### Install

```bash
npm install retro-term-css
```

### Use via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/afandisini/Retro-term@main/dist/retro-term.min.css">
<script src="https://cdn.jsdelivr.net/gh/afandisini/Retro-term@main/dist/retro-term.min.js" defer></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/afandisini/Retro-term@main/dist/retro-term-icons.css">
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
    </main>
    <script src="dist/retro-term.min.js" defer></script>
  </body>
</html>
```

### Theme Toggle

```html
<button id="themeToggle" class="rt-theme-toggle" aria-label="Toggle theme">
  <i class="rt rt-moon moon-icon"></i>
  <i class="rt rt-sun sun-icon"></i>
</button>
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

    <section class="rt-content">
      Content
    </section>
  </main>
</div>
```

### Layout Classes

| Class | Purpose |
| --- | --- |
| `rt-admin` | Admin app wrapper with sidebar and content columns |
| `rt-sbr` | Fixed sidebar |
| `rt-sbr-overlay` | Mobile sidebar backdrop |
| `rt-sbr-brand` | Sidebar brand header |
| `rt-sbr-nav` | Sidebar nav column |
| `rt-sbr-link` | Sidebar item |
| `rt-sbr-badge` | Small count rt-badge in sidebar |
| `rt-sbr-footer` | Sidebar footer area |
| `rt-main` | Main content column |
| `rt-topbar` | Top navigation bar |
| `rt-topbar-title` | Topbar title |
| `rt-topbar-search` | Search rt-container in topbar |
| `rt-topbar-actions` | Right-side action group |
| `rt-topbar-icon-tbl` | Icon button in topbar |
| `rt-topbar-dot` | Small notification dot |
| `rt-content` | Main page content wrapper |

### Sidebar Dropdown

```html
<div class="rt-nav-dropdown" data-rt-nav-dropdown>
  <button type="button" class="rt-nav-dropdown-toggle">
    <i class="rt rt-users"></i>
    UI Elements
    <i class="rt rt-chevron-down rt-nav-dropdown-chevron"></i>
  </button>

  <div class="rt-nav-dropdown-menu">
    <a class="rt-nav-dropdown-item" href="#">Button</a>
  </div>
</div>
```

---

## 3. Grid and Spacing

### Grid

```html
<div class="rt-row rt-g-3">
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">A</div>
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">B</div>
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">C</div>
</div>
```

### Grid Classes

| Class | Purpose |
| --- | --- |
| `rt-container` | Centered rt-container with responsive max-width |
| `rt-container-fluid` | Full-width rt-container |
| `rt-row` | Flex rt-row with gutters |
| `rt-col` | Equal-width flexible column |
| `rt-col-auto` | Auto-width column |
| `rt-col-1` to `rt-col-12` | Fixed width columns |
| `rt-col-sm-*`, `rt-col-md-*`, `rt-col-lg-*`, `rt-col-xl-*`, `rt-col-xxl-*` | Responsive columns |
| `rt-offset-*` | Column offsets |
| `rt-row-cols-*` | Equal rt-row count helpers |
| `rt-g-*`, `rt-gx-*`, `rt-gy-*` | Gutters |

### Spacing Utilities

Retro-term includes utility spacing classes such as:

- `rt-m1` to `rt-m4`
- `rt-mt1` to `rt-mt4`
- `rt-mb1` to `rt-mb4`
- `rt-ml1` to `rt-ml4`
- `rt-mr1` to `rt-mr4`
- `rt-my1` to `rt-my4`
- `rt-mx1` to `rt-mx4`
- `rt-p1` to `rt-p4`
- `rt-pt1` to `rt-pt4`
- `rt-pb1` to `rt-pb4`
- `rt-pl1` to `rt-pl4`
- `rt-pr1` to `rt-pr4`
- `rt-py1` to `rt-py4`
- `rt-px1` to `rt-px4`

### Shape and Flex Helpers

- `rt-round`, `rt-round-sm`, `rt-round-lg`, `rt-round-full`
- `rt-flex`, `rt-flex-start`, `rt-flex-center`, `rt-flex-end`, `rt-flex-between`

---

## 4. Typography

Retro-term styles standard HTML text tags and adds common utility text helpers.

### Common Text Helpers

- `rt-text-lead`
- `rt-text-muted`
- `rt-text-small`
- `rt-link`

### Example

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
- `rt-btn-sm`
- `rt-btn-lg`
- `rt-btn-icon`
- `rt-btn-block`
- `rt-btn-group`

### Example

```html
<div class="rt-btn-group">
  <button class="rt-btn rt-btn-primary">Save</button>
  <button class="rt-btn rt-btn-secondary">Cancel</button>
</div>
```

### Notes

- `rt-btn-group` is a compatibility alias for grouped actions.
- `rt-btn-block` and `rt-btn-block` force full width.

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

### Legacy Aliases

- `rt-input`
- `rt-input-sm`
- `rt-checkbox`

### Example

```html
<form>
  <div class="rt-form-group">
    <label class="rt-form-label" for="email">Email</label>
    <input id="email" class="rt-form-input" type="email" placeholder="you@example.com">
  </div>

  <div class="rt-form-group">
    <label class="rt-form-check">
      <input type="checkbox">
      <span>Remember me</span>
    </label>
  </div>
</form>
```

### Input Wrapper Pattern

```html
<div class="rt-input-wrapper">
  <i class="rt rt-user rt-input-icon" aria-hidden="true"></i>
  <input class="rt-form-input" type="text" placeholder="Your name">
</div>
```

---

## 7. Cards and Content Blocks

### Card Classes

- `rt-card`
- `rt-card-header`
- `rt-card-title`
- `rt-card-subtitle`
- `rt-card-actions`
- `rt-card-body`
- `rt-card-body-flush`
- `rt-card-footer`

### Example

```html
<div class="rt-card">
  <div class="rt-card-header">
    <div>
      <h3 class="rt-card-title">Overview</h3>
      <p class="rt-card-subtitle">Last 7 days</p>
    </div>
  </div>
  <div class="rt-card-body">
    Content
  </div>
</div>
```

---

## 8. Tables

### Canonical Classes

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

### Supporting Classes

- `rt-badge`
- `rt-badge--primary`
- `rt-badge--success`
- `rt-badge--warning`
- `rt-badge--danger`
- `rt-badge-dot`

### Example

```html
<div class="rt-table-wrap">
  <rt-table class="rt-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="rt-table-user">
            <div class="rt-table-avatar">RT</div>
            <div>
              <div class="rt-table-name">Retro Term</div>
              <div class="rt-table-email">hello@example.com</div>
            </div>
          </div>
        </td>
        <td><span class="rt-badge rt-badge--success"><span class="rt-badge-dot"></span> Active</span></td>
      </tr>
    </tbody>
  </rt-table>
</div>
```

---

## 9. Feedback Components

### Alerts

- `rt-alert`
- `rt-alert-icon`
- `rt-alert-content`
- `rt-alert-title`
- `rt-alert-text`
- `rt-alert--primary`
- `rt-alert--success`
- `rt-alert--warning`
- `rt-alert--danger`

### Toasts

- `rt-toast`
- `rt-toast-icon`
- `rt-toast-content`
- `rt-toast-title`
- `rt-toast-text`
- `rt-toast-close`
- `rt-toast--success`
- `rt-toast--warning`
- `rt-toast--danger`
- `rt-toast--top-left`
- `rt-toast--top-center`
- `rt-toast--top-right`
- `rt-toast--bottom-left`
- `rt-toast--bottom-center`
- `rt-toast--bottom-right`

### Example

```html
<div class="rt-alert rt-alert--primary">
  <div class="rt-alert-icon"><i class="rt rt-info"></i></div>
  <div class="rt-alert-content">
    <div class="rt-alert-title">Heads up</div>
    <div class="rt-alert-text">This is a framework-level notice.</div>
  </div>
</div>
```

---

## 10. Navigation

### Navbar

- `rt-navbar`
- `rt-navbar--scrolled`
- `rt-navbar-rt-container`
- `rt-navbar-brand`
- `rt-navbar-brand-dot`
- `rt-navbar-menu`
- `rt-navbar-link`
- `rt-navbar-actions`
- `rt-navbar-rt-btn`
- `rt-navbar-toggle`
- `rt-navbar--transparent`
- `rt-navbar--dark`

### Dropdown

- `rt-dropdown`
- `rt-dropdown-menu`
- `rt-dropdown-menu--left`
- `rt-dropdown-item`
- `rt-dropdown-item--danger`
- `rt-dropdown-divider`
- `rt-dropdown-label`

### Example

```html
<div class="rt-dropdown" data-rt-dropdown>
  <button class="rt-btn rt-btn-secondary" data-rt-dropdown-trigger type="button">Menu</button>
  <div class="rt-dropdown-menu">
    <button class="rt-dropdown-item" type="button">Profile</button>
    <div class="rt-dropdown-divider"></div>
    <button class="rt-dropdown-item rt-dropdown-item--danger" type="button">Logout</button>
  </div>
</div>
```

---

## 11. Modal

### Classes

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
- `rt-modal-embed`
- `rt-modal-embed--map`
- `rt-modal-embed--video`

### Example

```html
<div class="rt-modal" id="demoModal" role="dialog" aria-modal="true">
  <div class="rt-modal-dialog rt-modal-md">
    <div class="rt-modal-content">
      <div class="rt-modal-header">
        <h3 class="rt-modal-title">Modal title</h3>
        <button class="rt-modal-close" type="button" aria-label="Close"></button>
      </div>
      <div class="rt-modal-body">Body</div>
      <div class="rt-modal-footer">
        <button class="rt-btn rt-btn-secondary" type="button">Cancel</button>
        <button class="rt-btn rt-btn-primary" type="button">Save</button>
      </div>
    </div>
  </div>
</div>
```

---

## 12. Widgets

### Accordion

- `rt-accordion`
- `rt-accordion-item`
- `rt-accordion-trigger`
- `rt-accordion-icon`
- `rt-accordion-content`
- `rt-accordion-body`
- `rt-accordion--flush`

### Carousel

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
- `rt-activity-icon`
- `rt-activity-content`
- `rt-activity-text`
- `rt-activity-time`
- `rt-progress`
- `rt-progress-head`
- `rt-progress-label`
- `rt-progress-value`
- `rt-progress-bar`
- `rt-progress-fill`
- `rt-progress-fill--accent`
- `rt-progress-fill--success`
- `rt-progress-fill--purple`
- `rt-quick`
- `rt-quick-btn`

### Example

```html
<div class="rt-accordion">
  <div class="rt-accordion-item is-open">
    <button class="rt-accordion-trigger is-active" type="button">
      Section title
      <i class="rt rt-chevron-down rt-accordion-icon"></i>
    </button>
    <div class="rt-accordion-content">
      <div class="rt-accordion-body">Accordion content.</div>
    </div>
  </div>
</div>
```

---

## 13. Landing Page Components

### Classes

- `rt-landing`
- `rt-hero`
- `rt-hero-shape`
- `rt-hero-content`
- `rt-hero-rt-badge`
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

### Example Pages

- `example/landing-page.html`
- `example/login.html`
- `example/dashboard.html`
- `example/crud-table.html`

---

## 14. Legacy Compatibility

Retro-term keeps its current class prefixes. The following aliases exist for compatibility with existing examples:

- `rt-input` for legacy input examples
- `rt-input-sm` for compact legacy inputs
- `rt-link` for inline anchor styling
- `rt-btn-block` for full-width buttons
- `rt-btn-group` for grouped actions
- `rt-avatar-secondary`, `rt-avatar-accent`, `rt-avatar-danger` for avatar variants

These aliases do not replace the canonical classes. Prefer `rt-form-input`, `rt-form-select`, `rt-form-textarea`, `rt-form-check`, and the documented layout classes for new work.

---

## 15. JavaScript Hooks

Retro-term JS uses attribute hooks instead of framework dependencies.

### Common Hooks

- `id="themeToggle"`
- `id="menuBtn"`
- `id="sidebar"`
- `id="sidebarOverlay"`
- `data-rt-dropdown`
- `data-rt-dropdown-trigger`
- `data-rt-modal-open`
- `data-rt-modal-close`
- `data-rt-nav-dropdown`

### Initialization Notes

- Load `retro-term.min.js` with `defer`.
- Keep the `data-theme` attribute on `<html>`.
- Keep sidebar and rt-dropdown IDs consistent with the examples if you reuse the stock script.

---

## 16. Sass Build

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
@use "rt-dropdown";
@use "rt-table";
@use "widgets";
@use "components";
@use "landing";
@use "responsive";
```

### Build Commands

```bash
npm run build:css
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

## 17. Customization Notes

- Keep the `rt-` prefix for new framework classes.
- Keep examples and docs aligned with the canonical `rt-` namespace.
- Avoid adding external dependencies to the framework layer.
- Prefer documentation and example updates before changing Sass.

---

## 18. Browser Support

Retro-term is built for modern evergreen browsers with support for:

- CSS variables
- Flexbox and Grid
- `backdrop-filter` enhancements
- `prefers-reduced-motion` friendly behavior where used by the browser

---

## 19. Example Inventory

- `example/dashboard.html` - admin dashboard
- `example/landing-page.html` - marketing landing page
- `example/login.html` - login screen
- `example/crud-table.html` - CRUD table and modal form
- `example/components-demo.html` - component showcase

---

## 20. License

MIT
