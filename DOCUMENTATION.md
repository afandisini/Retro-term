# Retro-term CSS Documentation

Retro-term is a standalone retro-modern CSS framework for admin panels, dashboards, landing pages, and documentation websites. Built from scratch without Bootstrap or Tailwind dependencies.

**No Bootstrap. No Tailwind. Just Retro-term.**

---

## Introduction

Retro-term is designed for developers who need ready-to-use retro-modern layouts for:

- Admin panels and internal dashboards
- CRUD interfaces
- Landing pages
- Developer portfolios
- Documentation websites

### Key Features

- ✅ Standalone - zero external dependencies
- ✅ Light/dark theme system with localStorage persistence
- ✅ Responsive admin layout with sidebar
- ✅ Grid system (12 columns)
- ✅ Interactive components (modal, dropdown, toast, accordion, carousel, navbar)
- ✅ Form elements with validation styles
- ✅ Icon system included
- ✅ Touch-friendly mobile interactions

---

## Getting Started

### Installation

#### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/afandisini/Retro-term@main/retro-term.min.css">
<script src="https://cdn.jsdelivr.net/gh/afandisini/Retro-term@main/retro-term.min.js" defer></script>
```

#### NPM

```bash
npm install retro-term-css
```

```js
import 'retro-term-css/css';
import 'retro-term-css/js';
```

### Basic HTML Template

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
    <script src="dist/retro-term.min.js" defer></script>
  </body>
</html>
```

### Theme Toggle

```html
<button id="themeToggle" aria-label="Toggle theme">
  <i class="rt rt-moon moon-icon"></i>
  <i class="rt rt-sun sun-icon"></i>
</button>
```

---

## Layout

### Admin Panel Layout

Complete admin panel structure with sidebar and topbar:

```html
<div class="rt-admin">
  <div class="rt-sbr_overlay" id="sidebarOverlay"></div>

  <aside class="rt-sbr" id="sidebar">
    <div class="rt-sbr_brand">
      <span class="rt-brand_dot"></span>
      <span>Retro-term</span>
    </div>
    <nav class="rt-sbr_nav">
      <a class="rt-sbr_link" href="dashboard.html">
        <i class="rt rt-dashboard"></i>
        Dashboard
      </a>
    </nav>
    <div class="rt-sbr_footer">
      <div class="rt-sbr_user">
        <div class="rt-sbr_avatar">A</div>
        <div class="rt-sbr_user-info">
          <div class="rt-sbr_user-name">Admin</div>
          <div class="rt-sbr_user-role">Administrator</div>
        </div>
      </div>
    </div>
  </aside>

  <main class="rt-main">
    <div class="rt-topbar">
      <button class="rt-topbar_menu-tbl" id="menuBtn" aria-label="Menu">
        <i class="rt rt-menu"></i>
      </button>
      <h1 class="rt-topbar_title">Dashboard</h1>
    </div>
    <section class="rt-content">
      <!-- Content here -->
    </section>
  </main>
</div>
```

**Key classes:**
- `.rt-admin` - Admin wrapper
- `.rt-sbr` - Sidebar
- `.rt-main` - Main content area
- `.rt-topbar` - Top navigation bar

### Landing Page Layout

```html
<body class="rt-landing">
  <header class="rt-hero">
    <div class="rt-container">
      <span class="rt-badge rt-badge--primary">Retro-term CSS</span>
      <h1 class="rt-hero__title">Build retro-modern landing pages faster.</h1>
      <p class="rt-hero__subtitle">Standalone CSS framework for admin panels and landing pages.</p>
      <a href="#" class="rt-btn rt-btn-primary">Get Started</a>
    </div>
  </header>

  <section class="rt-section">
    <div class="rt-container">
      <!-- Feature cards here -->
    </div>
  </section>

  <footer class="rt-footer">
    <div class="rt-container">
      <p>&copy; 2026 Retro-term CSS</p>
    </div>
  </footer>
</body>
```

---

## Container

Center content with max-width constraints:

```html
<div class="rt-container">
  <!-- Centered content -->
</div>
```

**Variants:**
- `.rt-container` - Default container with max-width
- `.rt-container-fluid` - Full-width container

---

## Grid

12-column responsive grid system:

```html
<div class="rt-row">
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">Column 1</div>
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">Column 2</div>
  <div class="rt-col-12 rt-col-md-6 rt-col-lg-4">Column 3</div>
</div>
```

**Breakpoints:**
- `rt-col-*` - Mobile (default)
- `rt-col-sm-*` - Small (≥576px)
- `rt-col-md-*` - Medium (≥768px)
- `rt-col-lg-*` - Large (≥992px)
- `rt-col-xl-*` - Extra large (≥1200px)

---

## Typography

### Headings

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

### Body Text

```html
<p class="rt-text-lead">Lead paragraph text.</p>
<p class="rt-text-muted">Muted text.</p>
<p class="rt-text-small">Small text.</p>
```

---

## Buttons

Action buttons with various styles:

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

**Sizes:**
- `.rt-btn-sm` - Small
- `.rt-btn-lg` - Large
- `.rt-btn-xl` - Extra large

**Accessibility:** Always use `<button type="button">` or `<button type="submit">` for form buttons.

---

## Forms

### Input Fields

```html
<form>
  <div class="rt-form-group">
    <label class="rt-form-label" for="email">Email</label>
    <input type="email" id="email" class="rt-input" placeholder="Enter email">
  </div>
  
  <div class="rt-form-group">
    <label class="rt-form-label" for="password">Password</label>
    <input type="password" id="password" class="rt-input" placeholder="Enter password">
  </div>
  
  <button type="submit" class="rt-btn rt-btn-primary">Submit</button>
</form>
```

### Select

```html
<select class="rt-select">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Textarea

```html
<textarea class="rt-textarea" rows="4" placeholder="Enter message"></textarea>
```

### Checkbox & Radio

```html
<label class="rt-checkbox">
  <input type="checkbox">
  <span>Remember me</span>
</label>

<label class="rt-radio">
  <input type="radio" name="option">
  <span>Option 1</span>
</label>
```

---

## Cards

Content containers with header and body:

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Card subtitle</p>
  </div>
  <div class="card-body">
    Card content goes here.
  </div>
</div>
```

**Variants:**
- `.card-body-flush` - Remove padding from card body

---

## Badges

Compact labels and status indicators:

```html
<span class="rt-badge rt-badge--primary">Primary</span>
<span class="rt-badge rt-badge--success">
  <span class="rt-badge_dot"></span>
  Active
</span>
<span class="rt-badge rt-badge--danger">Error</span>
<span class="rt-badge rt-badge--warning">Warning</span>
```

---

## Alerts

Notification messages:

```html
<div class="rt-alert rt-alert--success">
  <i class="rt rt-check-circle"></i>
  <span>Operation successful!</span>
</div>

<div class="rt-alert rt-alert--danger">
  <i class="rt rt-x-circle"></i>
  <span>Error occurred.</span>
</div>
```

---

## Tables

Responsive data tables:

```html
<table class="rt-table">
  <thead>
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Status</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>john@example.com</td>
      <td><span class="rt-badge rt-badge--success">Active</span></td>
      <td>
        <button class="rt-btn rt-btn-sm rt-btn-ghost">Edit</button>
        <button class="rt-btn rt-btn-sm rt-btn-danger">Delete</button>
      </td>
    </tr>
  </tbody>
</table>
```

**Accessibility:** Use `<thead>` for table headers and provide meaningful row data.

---

## Navbar

Navigation bar component:

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

**Variants:**
- `.rt-navbar--transparent` - Transparent background
- `.rt-navbar--dark` - Dark theme

---

## Sidebar

Admin sidebar navigation:

```html
<aside class="rt-sbr">
  <div class="rt-sbr_brand">
    <span class="rt-brand_dot"></span>
    <span>Brand</span>
  </div>
  
  <nav class="rt-sbr_nav">
    <a class="rt-sbr_link is-active" href="dashboard.html">
      <i class="rt rt-dashboard"></i>
      Dashboard
    </a>
  </nav>
  
  <div class="rt-sbr_footer">
    <div class="rt-sbr_user">
      <div class="rt-sbr_avatar">A</div>
      <div class="rt-sbr_user-info">
        <div class="rt-sbr_user-name">Admin</div>
        <div class="rt-sbr_user-role">Administrator</div>
      </div>
    </div>
  </div>
</aside>
```

---

## Modal

Dialog overlays:

```html
<div class="modal" id="myModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
  <div class="modal-dialog modal-md">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="modalTitle">Modal Title</h3>
        <button class="modal-close" data-modal-close aria-label="Close">&times;</button>
      </div>
      <div class="modal-body">
        Modal content here.
      </div>
      <div class="modal-footer">
        <button class="rt-btn rt-btn-secondary" data-modal-close>Cancel</button>
        <button class="rt-btn rt-btn-primary">Confirm</button>
      </div>
    </div>
  </div>
</div>
```

**Sizes:**
- `.modal-sm` - Small
- `.modal-md` - Medium (default)
- `.modal-lg` - Large
- `.modal-xl` - Extra large
- `.modal-fullscreen` - Full screen

**Accessibility:** Use `role="dialog"`, `aria-modal="true"`, and `aria-labelledby`.

---

## Dropdown

Dropdown menus:

```html
<div class="rt-dropdown">
  <button class="rt-btn rt-btn-primary" data-dropdown-trigger aria-expanded="false">
    Options
    <i class="rt rt-chevron-down"></i>
  </button>
  <div class="rt-dropdown-menu">
    <a href="#" class="rt-dropdown-item">Action 1</a>
    <a href="#" class="rt-dropdown-item">Action 2</a>
    <a href="#" class="rt-dropdown-item">Action 3</a>
  </div>
</div>
```

**Accessibility:** Use `aria-expanded` to indicate dropdown state.

---

## Toast

Notification toasts:

```html
<div class="rt-toast rt-toast--success">
  <i class="rt rt-check-circle"></i>
  <span>Operation successful!</span>
</div>

<div class="rt-toast rt-toast--danger">
  <i class="rt rt-x-circle"></i>
  <span>Error occurred.</span>
</div>
```

**Positions:** Toast can be positioned using utility classes.

---

## Accordion

Collapsible content sections:

```html
<div class="rt-accordion">
  <div class="rt-accordion-item">
    <button class="rt-accordion-trigger" aria-expanded="false">
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

**Multiple open items:** Add `rt-accordion--multiple` to allow multiple sections open simultaneously.

---

## Carousel

Image slider with touch support:

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
  <button class="rt-carousel-btn rt-carousel-btn--prev" aria-label="Previous slide">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  </button>
  <button class="rt-carousel-btn rt-carousel-btn--next" aria-label="Next slide">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  </button>
  <div class="rt-carousel-indicators">
    <button class="rt-carousel-indicator is-active" aria-label="Go to slide 1"></button>
    <button class="rt-carousel-indicator" aria-label="Go to slide 2"></button>
  </div>
</div>
```

**Features:**
- Touch/swipe support
- Keyboard navigation (Arrow keys)
- Autoplay with `data-autoplay` attribute (milliseconds)
- Pause on hover

---

## Admin Panel Layout

See [Layout](#layout) section for complete admin panel structure.

**Additional admin components:**
- Stat cards (`.rt-stats`, `.rt-stat`)
- Dashboard grids (`.rt-grid`)
- CRUD table wrappers

---

## Landing Page Layout

See [Layout](#layout) section for landing page structure.

**Landing page components:**
- Hero section (`.rt-hero`)
- Feature cards
- CTA section (`.rt-cta`)
- Timeline section
- Footer (`.rt-footer`)

---

## Theme Toggle

Switch between light and dark themes:

```html
<button id="themeToggle" aria-label="Toggle theme">
  <i class="rt rt-moon moon-icon"></i>
  <i class="rt rt-sun sun-icon"></i>
</button>
```

```js
const html = document.documentElement;
const current = html.getAttribute('data-theme');
html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
```

Theme preference is stored in localStorage and persists across sessions.

---

## Utility Classes

### Display

```html
<div class="rt-d-none">Hidden</div>
<div class="rt-d-block">Block</div>
<div class="rt-d-flex">Flex</div>
<div class="rt-d-grid">Grid</div>
```

### Flexbox

```html
<div class="rt-flex-center">Centered content</div>
<div class="rt-flex-between">Space between</div>
<div class="rt-flex-column">Column direction</div>
```

### Text Alignment

```html
<p class="rt-text-left">Left aligned</p>
<p class="rt-text-center">Center aligned</p>
<p class="rt-text-right">Right aligned</p>
```

### Spacing

Margin and padding utilities follow pattern: `{property}-{size}`

```html
<div class="rt-m-1">Margin 1</div>
<div class="rt-m-2">Margin 2</div>
<div class="rt-p-3">Padding 3</div>
<div class="rt-p-4">Padding 4</div>
```

### Visibility

```html
<div class="rt-visible-md">Visible on medium screens</div>
<div class="rt-hidden-sm">Hidden on small screens</div>
```

---

## JavaScript Usage

### Core JavaScript (`retro-term.js`)

Handles interactive behaviors:

- Theme toggle (`#themeToggle`)
- Mobile sidebar (`#menuBtn`, `#sidebar`, `#sidebarOverlay`)
- Dropdowns (`[data-dropdown]`)
- Modals (`[data-modal-open]`, `[data-modal-close]`)
- Toast notifications
- Table search/pagination demos

### Components JavaScript (`retro-term-components.js`)

Provides additional components:

- Accordion interactions
- Carousel with touch/swipe
- Navbar scroll effects

### Initialization

```html
<script src="dist/retro-term.min.js" defer></script>
<script src="dist/retro-term-components.min.js" defer></script>
```

---

## Accessibility Notes

Retro-term follows accessibility best practices:

1. **Buttons**: Always specify `type` attribute
2. **Modals**: Use `role="dialog"`, `aria-modal="true"`, `aria-labelledby`
3. **Dropdowns**: Use `aria-expanded` to indicate state
4. **Sidebar toggle**: Include `aria-label`
5. **Theme toggle**: Include `aria-label`
6. **Focus visible**: Maintain visible focus indicators
7. **Reduced motion**: Respect `prefers-reduced-motion` preference

### Keyboard Navigation

- Tab through interactive elements
- Enter/Space to activate buttons
- Escape to close modals/dropdowns
- Arrow keys for carousel navigation

---

## Customization with Sass

### Variables

Override default variables before importing Retro-term:

```scss
// _custom-variables.scss
$rt-primary: #your-color;
$rt-primary-rgb: your-rgb-values;
$rt-border-radius: 12px;

// Then import
@use 'retro-term' with (
  $primary: #your-color
);
```

### Build Process

```bash
npm install
npm run build:css
```

Watch mode:

```bash
npm run watch:css
```

### File Structure

```
sass/
├── _variables.scss    # Design tokens
├── _base.scss         # Reset and base styles
├── _typography.scss   # Text styles
├── _grid.scss         # Grid system
├── _layout.scss       # Admin/layout structures
├── _buttons.scss      # Button styles
├── _components.scss   # Reusable components
├── _feedback.scss     # Alerts and toasts
├── _popup.scss        # Modals
├── _dropdown.scss     # Dropdown menus
├── _table.scss        # Table styles
├── _widgets.scss      # Widgets
├── _utilities.scss    # Utility classes
├── _responsive.scss   # Media queries
└── retro-term.scss    # Main entry point
```

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | Last 2  |
| Firefox | Last 2  |
| Safari  | Last 2  |
| Edge    | Last 2  |

---

## License

MIT License - See [LICENSE](../LICENSE) for details.
