# Retro-term Component Contract

This file is the canonical feature contract for the Retro-term demo and framework.
Classes and hooks listed here are framework features. Classes beginning with `rt-home-`,
`rt-doc-`, or `site-` are application-specific and are not part of the core contract.

## Global modes

Every page should declare the modes on `<html>`:

```html
<html data-theme="dark" data-radius="flat">
```

- `data-theme`: `dark` or `light`
- `data-radius`: `flat` or `rounded`
- JavaScript hooks: `[data-rt-theme-toggle]`, `[data-rt-shape-toggle]`
- JavaScript API: `RT.theme.set()`, `RT.theme.toggle()`, `RT.radius.set()`, `RT.radius.toggle()`

## Tables

The standard table provides search, reset, sorting, page size, pagination, and responsive
overflow. Add `data-rt-table-server` and `data-rt-table-url` for Ajax data.

```html
<div class="rt-card" data-rt-table>
  <table class="rt-table" data-rt-table-server
         data-rt-table-url="/api/users"
         data-rt-table-columns="name,email,role">
    <thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead>
    <tbody></tbody>
  </table>
</div>
```

The endpoint receives `page`, `page_size`, and `search`. It returns either:

```json
{"rows":[{"name":"Demo","email":"demo@example.com","role":"Admin"}],"total":1}
```

or HTML table rows in `html` plus `total`.

## Modal

Use `data-rt-modal-open="modal-id"` on a trigger and `data-rt-modal` on the modal.

```html
<button class="rt-btn rt-btn-primary" data-rt-modal-open="confirm-modal">Open</button>
<div class="rt-modal rt-modal-md" id="confirm-modal" data-rt-modal>
  <div class="rt-modal-content">
    <div class="rt-modal-header">
      <h2 class="rt-modal-title">Confirm action</h2>
      <button class="rt-modal-close" data-rt-modal-close aria-label="Close"></button>
    </div>
    <div class="rt-modal-body">Content</div>
  </div>
</div>
```

JavaScript API: `RT.modal.open('confirm-modal')` and `RT.modal.close(element)`.

## Toast

Toast is available without a pre-existing demo element:

```js
RT.toast.show('Saved successfully.', {
  title: 'Success',
  variant: 'success',
  position: 'bottom-right'
});
```

Supported variants are `success`, `warning`, and `danger`. Supported positions are
`top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, and `bottom-right`.

## Scroll X/Y

Use `rt-scroll-x`, `rt-scroll-y`, or `rt-scroll` for the scroll container. Add a
button with `data-rt-scroll-target` for smooth scrolling; use `x` or `y` for the
axis and `prev`/`next` (or `up`/`down`) for the direction.

```html
<div class="rt-scroll-x" id="user-strip">Long horizontal content...</div>
<div class="rt-scroll-controls">
  <button class="rt-scroll-btn" data-rt-scroll-target="#user-strip"
          data-rt-scroll-axis="x" data-rt-scroll-direction="prev">Prev</button>
  <button class="rt-scroll-btn" data-rt-scroll-target="#user-strip"
          data-rt-scroll-axis="x" data-rt-scroll-direction="next">Next</button>
</div>
```

Buttons automatically disable at the start/end of the axis and support
`data-rt-scroll-step` in pixels.

## Cards

The core card families are:

- `rt-card`, `rt-card-header`, `rt-card-body`, `rt-card-footer`
- `rt-card.rt-img-t` for image top
- `rt-card.rt-img-r` for image right
- `rt-card.rt-img-l` for image left
- `rt-terminal-window` and `rt-terminal-card` for terminal presentation

## Navigation shells

The standard dashboard shell uses:

- `rt-admin`, `rt-sbr`, `rt-sbr-overlay`, `rt-sbr-nav`, `rt-sbr-link`
- `rt-main`, `rt-topbar`, `rt-topbar-title`, `rt-topbar-actions`
- `rt-navbar`, `rt-navbar-menu`, `rt-navbar-link`, `rt-navbar-toggle` for public navigation

The mobile sidebar uses `#menuBtn`, `#sidebar`, and `#sidebarOverlay`, or the equivalent
framework data hooks documented in `DOCUMENTATION.md`.

## Release rule

CSS, icons, and JavaScript used by the demo must be built from the same tagged commit.
Do not combine a GitHub CDN CSS tag with a different local or older JavaScript release.
