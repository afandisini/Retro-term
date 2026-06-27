# Retro-term

**Retro-term is a standalone retro-modern CSS framework for admin panels, dashboards, landing pages, and documentation websites without Bootstrap or Tailwind CSS.**

![Front Page Preview](assets/images/front_page.png)

![Admin Panel Preview](assets/images/admin_panel.png)

![Login Page Preview](assets/images/login_page.png)

---

## Overview

Retro-term is a lightweight, standalone CSS framework designed for developers who need ready-to-use retro-modern layouts for admin panels, dashboards, and landing pages. Built from scratch without any dependency on Bootstrap, Tailwind, or other CSS frameworks.

**No Bootstrap. No Tailwind. Just Retro-term.**

## Why Retro-term?

- **Standalone**: Zero dependencies on Bootstrap, Tailwind, Bulma, or Foundation
- **Retro-Modern Design**: Unique terminal-inspired aesthetic with modern UI patterns
- **Ready-to-Use Components**: Admin sidebar, navbar, cards, tables, forms, modals, toasts
- **Theme System**: Built-in light/dark mode with smooth transitions
- **Lightweight**: ~64KB minified CSS, ~23KB minified JS
- **Framework Agnostic**: Works with vanilla HTML, PHP, Laravel, CodeIgniter, Vue, React, Next.js, Nuxt, Svelte, Astro

## Best For

- Admin panels
- Internal dashboards
- CRUD interfaces
- Landing pages
- Developer portfolios
- Documentation websites
- Retro terminal-inspired interfaces

> **Positioning**: Retro-term is not trying to replace Bootstrap or Tailwind for every project. It focuses on ready-to-use retro-modern layouts for admin panels, dashboards, and landing pages.

## Features

- ✅ Light and dark theme support with localStorage persistence
- ✅ Flat retro-modern UI language
- ✅ Responsive admin dashboard layout with sidebar
- ✅ Grid system with `rt-container`, `rt-row`, and `rt-col-*`
- ✅ Interactive components: Modal, Dropdown, Toast, Accordion, Carousel, Navbar
- ✅ Form elements with validation styles
- ✅ Table with search and pagination demos
- ✅ Touch-friendly mobile interactions
- ✅ Keyboard navigation support
- ✅ Icon system included (retro-term-icons)

## Installation

### CDN Usage

```html
<!-- Core styles -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/afandisini/Retro-term@main/retro-term.min.css">

<!-- Core JavaScript -->
<script src="https://cdn.jsdelivr.net/gh/afandisini/Retro-term@main/retro-term.min.js" defer></script>

<!-- Icons (optional) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/afandisini/Retro-term@main/dist/retro-term-icons.min.css">
```

### NPM Usage

```bash
npm install retro-term-css
```

```js
// Import CSS
import 'retro-term-css/css';

// Import JavaScript helpers
import 'retro-term-css/js';
```

Or import directly from dist:

```js
import 'retro-term-css/dist/retro-term.min.css';
import 'retro-term-css/dist/retro-term.min.js';
```

### Basic HTML Starter

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retro-term</title>
    <link rel="stylesheet" href="dist/retro-term.min.css">
    <link rel="stylesheet" href="dist/retro-term-icons.min.css">
  </head>
  <body>
    <h1>Hello Retro-term</h1>
    <button class="rt-btn rt-btn-primary">Click Me</button>
    <script src="dist/retro-term.min.js" defer></script>
  </body>
</html>
```

---

## Admin Panel Example

Retro-term provides a complete admin panel layout with sidebar, topbar, and content area:

```html
<div class="rt-admin">
  <!-- Sidebar Overlay (mobile) -->
  <div class="rt-sbr_overlay" id="sidebarOverlay"></div>

  <!-- Sidebar -->
  <aside class="rt-sbr" id="sidebar">
    <div class="rt-sbr_brand">
      <span class="rt-brand_dot"></span>
      <span>Retro-term</span>
    </div>

    <nav class="rt-sbr_nav">
      <a class="rt-sbr_link is-active" href="dashboard.html">
        <i class="rt rt-dashboard"></i>
        Dashboard
      </a>
      <a class="rt-sbr_link" href="users.html">
        <i class="rt rt-users"></i>
        Users
      </a>
    </nav>

    <div class="rt-sbr_footer">
      <div class="rt-sbr_user">
        <div class="rt-sbr_avatar">A</div>
        <div class="rt-sbr_user-info">
          <div class="rt-sbr_user-name">Admin User</div>
          <div class="rt-sbr_user-role">Administrator</div>
        </div>
      </div>
    </div>
  </aside>

  <!-- Main Content -->
  <main class="rt-main">
    <!-- Topbar -->
    <div class="rt-topbar">
      <button class="rt-topbar_menu-tbl" id="menuBtn" aria-label="Menu">
        <i class="rt rt-menu"></i>
      </button>
      <h1 class="rt-topbar_title">Dashboard</h1>
      <div class="rt-topbar_actions">
        <button class="rt-topbar_icon-tbl" id="themeToggle" aria-label="Toggle theme">
          <i class="rt rt-moon moon-icon"></i>
          <i class="rt rt-sun sun-icon"></i>
        </button>
      </div>
    </div>

    <!-- Content Area -->
    <section class="rt-content">
      <!-- Your dashboard content here -->
    </section>
  </main>
</div>
```

See full example in [`example/dashboard.html`](example/dashboard.html).

---

## Landing Page Example

Create stunning landing pages with Retro-term's hero, feature cards, and CTA sections:

```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retro-term - Landing Page</title>
    <link rel="stylesheet" href="dist/retro-term.min.css">
  </head>
  <body class="rt-landing">
    
    <!-- Theme Toggle -->
    <button class="rt-theme-toggle" id="themeToggle" aria-label="Toggle theme">
      <svg class="moon-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
      <svg class="sun-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="5"/>
        <line x1="12" y1="1" x2="12" y2="3"/>
        <line x1="12" y1="21" x2="12" y2="23"/>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
        <line x1="1" y1="12" x2="3" y2="12"/>
        <line x1="21" y1="12" x2="23" y2="12"/>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    </button>

    <!-- Hero Section -->
    <header class="rt-hero">
      <div class="rt-container">
        <div class="rt-hero__content">
          <span class="rt-badge rt-badge--primary">Retro-term CSS</span>
          <h1 class="rt-hero__title">Build retro-modern landing pages faster.</h1>
          <p class="rt-hero__subtitle">Standalone CSS framework for admin panels and landing pages.</p>
          <div class="rt-hero__actions">
            <a href="#" class="rt-btn rt-btn-primary">Get Started</a>
            <a href="#" class="rt-btn rt-btn-outline">Learn More</a>
          </div>
        </div>
      </div>
    </header>

    <!-- Feature Cards -->
    <section class="rt-section">
      <div class="rt-container">
        <div class="rt-grid-3">
          <div class="card">
            <div class="card-body">
              <i class="rt rt-bolt rt-feature-icon"></i>
              <h3>Fast & Lightweight</h3>
              <p>~64KB CSS, no dependencies, instant load times.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <i class="rt rt-palette rt-feature-icon"></i>
              <h3>Retro-Modern Design</h3>
              <p>Unique terminal-inspired aesthetic with modern UX.</p>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <i class="rt rt-device-mobile rt-feature-icon"></i>
              <h3>Fully Responsive</h3>
              <p>Mobile-first design that works on all devices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="rt-section rt-cta">
      <div class="rt-container">
        <h2>Ready to build something amazing?</h2>
        <p>Start with Retro-term today.</p>
        <a href="#" class="rt-btn rt-btn-primary rt-btn-lg">Download Now</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="rt-footer">
      <div class="rt-container">
        <p>&copy; 2026 Retro-term CSS. MIT License.</p>
      </div>
    </footer>

    <script src="dist/retro-term.min.js" defer></script>
  </body>
</html>
```

---

## Components

### Buttons

```html
<button class="rt-btn rt-btn-primary">Primary</button>
<button class="rt-btn rt-btn-secondary">Secondary</button>
<button class="rt-btn rt-btn-success">Success</button>
<button class="rt-btn rt-btn-danger">Danger</button>
<button class="rt-btn rt-btn-warning">Warning</button>
<button class="rt-btn rt-btn-accent">Accent</button>
<button class="rt-btn rt-btn-ghost">Ghost</button>
<button class="rt-btn rt-btn-outline">Outline</button>
```

Sizes: `.rt-btn-sm`, `.rt-btn-lg`, `.rt-btn-xl`

### Badges

```html
<span class="rt-badge rt-badge--success">
  <span class="rt-badge_dot"></span>
  Active
</span>
<span class="rt-badge rt-badge--danger">Error</span>
```

### Cards

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
  </div>
  <div class="card-body">
    Card content goes here.
  </div>
</div>
```

### Modals

```html
<div class="modal" id="myModal">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title">Modal Title</h3>
        <button class="modal-close" data-modal-close>&times;</button>
      </div>
      <div class="modal-body">
        Modal content here.
      </div>
    </div>
  </div>
</div>
```

### Toast Notifications

```html
<div class="rt-toast rt-toast--success">
  <i class="rt rt-check-circle"></i>
  <span>Operation successful!</span>
</div>
```

### Tables

```html
<table class="rt-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td><span class="rt-badge rt-badge--success">Active</span></td>
    </tr>
  </tbody>
</table>
```

### Forms

```html
<form>
  <div class="rt-form-group">
    <label class="rt-form-label">Email</label>
    <input type="email" class="rt-input" placeholder="Enter email">
  </div>
  <button type="submit" class="rt-btn rt-btn-primary">Submit</button>
</form>
```

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

For multiple open items, add `rt-accordion--multiple` to the parent.

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

Features: Touch/swipe support, keyboard navigation, autoplay, pause on hover.

### Navbar

```html
<nav class="rt-navbar">
  <div class="rt-navbar-container">
    <a href="#" class="rt-navbar-brand">
      <span class="rt-navbar-brand-dot"></span>
      Brand
    </a>
    <button class="rt-navbar-toggle" aria-label="Toggle menu">
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

Variants: `.rt-navbar--transparent`, `.rt-navbar--dark`

---

## Layout & Grid

### Container

```html
<div class="rt-container">
  <!-- Centered content with max-width -->
</div>
```

### Grid System

```html
<div class="rt-row">
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">Column 1</div>
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">Column 2</div>
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">Column 3</div>
</div>
```

Grid columns: 1-12, with responsive breakpoints (`-sm`, `-md`, `-lg`, `-xl`).

---

## Theme System

Retro-term supports light and dark themes with automatic localStorage persistence:

```html
<html lang="en" data-theme="light">
<!-- or -->
<html lang="en" data-theme="dark">
```

Toggle theme with JavaScript:

```js
const html = document.documentElement;
const current = html.getAttribute('data-theme');
html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
```

The framework respects `prefers-color-scheme` for initial theme detection.

---

## JavaScript Helpers

`retro-term.js` provides:

- Theme toggle (`#themeToggle`)
- Mobile sidebar toggle (`#menuBtn`, `#sidebar`, `#sidebarOverlay`)
- Dropdown menus (`[data-dropdown]`)
- Modal open/close (`[data-modal-open]`, `[data-modal-close]`)
- Toast notifications
- Table search and pagination demos

`retro-term-components.js` provides:

- Accordion interactions
- Carousel with touch/swipe support
- Navbar scroll effects and mobile menu

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | Last 2  |
| Firefox | Last 2  |
| Safari  | Last 2  |
| Edge    | Last 2  |

---

## Build From Source

Install dependencies:

```bash
npm install
```

Build CSS and JS:

```bash
npm run build
```

Watch Sass for changes:

```bash
npm run watch:css
```

Output files:

- `retro-term.css` - Full stylesheet
- `retro-term.min.css` - Minified stylesheet (~64KB)
- `retro-term.js` - JavaScript helpers
- `retro-term.min.js` - Minified JS (~23KB)
- `dist/retro-term-icons.css` - Icon fonts

---

## Project Structure

```text
Retro-term/
├── dist/
│   ├── retro-term.css
│   ├── retro-term.min.css
│   ├── retro-term.js
│   ├── retro-term.min.js
│   └── retro-term-icons.css
├── sass/
│   ├── _variables.scss
│   ├── _base.scss
│   ├── _typography.scss
│   ├── _grid.scss
│   ├── _layout.scss
│   ├── _buttons.scss
│   ├── _components.scss
│   ├── _feedback.scss
│   ├── _popup.scss
│   ├── _dropdown.scss
│   ├── _table.scss
│   ├── _widgets.scss
│   ├── _utilities.scss
│   ├── _responsive.scss
│   └── retro-term.scss
├── example/
│   ├── dashboard.html
│   ├── buttons.html
│   ├── badge.html
│   ├── modal.html
│   ├── toast.html
│   ├── table.html
│   ├── input.html
│   ├── typography.html
│   └── doc.html
├── assets/
│   ├── images/
│   └── term-icons/
├── index.html
├── login.html
├── package.json
├── README.md
├── DOCUMENTATION.md
└── CHANGELOG.md
```

---

## Comparison

| Feature | Retro-term | Bootstrap | Tailwind |
|---------|------------|-----------|----------|
| Standalone | ✅ Yes | ❌ Requires jQuery (v4) | ❌ Requires build step |
| File Size | ~64KB | ~180KB | Varies (build) |
| Admin Layout | ✅ Built-in | ❌ Plugin needed | ❌ Custom |
| Dark Mode | ✅ Built-in | ✅ v5+ | ✅ Plugin |
| Learning Curve | Low | Medium | High |
| Design Style | Retro-Modern | Generic | Utility-first |

---

## License

MIT License - See [LICENSE](LICENSE) for details.

---

## Demo Pages

Reference pages live in `example/`:

- [`example/dashboard.html`](example/dashboard.html) - Admin dashboard
- [`example/buttons.html`](example/buttons.html) - Button variants
- [`example/badge.html`](example/badge.html) - Badge styles
- [`example/modal.html`](example/modal.html) - Modal dialogs
- [`example/toast.html`](example/toast.html) - Toast notifications
- [`example/table.html`](example/table.html) - Data tables
- [`example/input.html`](example/input.html) - Form inputs
- [`example/typography.html`](example/typography.html) - Typography
- [`example/color.html`](example/color.html) - Color palette
- [`example/doc.html`](example/doc.html) - Documentation layout

---

## Notes

- Keep the `rt-...` namespace unchanged.
- Update paths when a page moves between root and subfolders.
- Use the demo pages as reference for structure and behavior.
- Retro-term works with plain HTML, PHP, Laravel, CodeIgniter, Vue, React, Next.js, Nuxt, Svelte, and Astro.
