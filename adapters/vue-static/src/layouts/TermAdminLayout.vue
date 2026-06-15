<script setup>
import TermHeader from '../components/TermHeader.vue';
import TermSidebar from '../components/TermSidebar.vue';

defineProps({
  menu: {
    type: Array,
    required: true,
  },
  activePath: {
    type: String,
    default: '#/dashboard',
  },
  theme: {
    type: String,
    default: 'dark',
  },
  footerText: {
    type: String,
    default: 'Retro-term / SYS.ADMIN interface / build v2.0',
  },
});
</script>

<template>
  <div class="term-wrapper">
    <TermHeader
      :theme="theme"
    />

    <TermSidebar
      :menu="menu"
      :active-path="activePath"
      :footer-text="footerText"
    />

    <div
      class="term-overlay"
      data-term-action="toggle-sidebar"
      aria-hidden="true"
    />

    <main class="term-content">
      <section class="term-content-header">
        <slot name="header" />
      </section>

      <section class="term-content-body">
      <slot />
      </section>
    </main>

    <div
      id="searchModal"
      class="term-modal-overlay"
      aria-hidden="true"
      data-term-action="close-modal"
      data-term-target="searchModal"
    >
      <div
        class="term-modal-dialog term-modal-lg"
        role="dialog"
        aria-modal="true"
        aria-labelledby="searchTitle"
      >
        <div class="term-modal-header">
          <span id="searchTitle">SEARCH</span>
          <button
            class="term-btn term-btn-icon term-btn-close"
            type="button"
            data-term-action="close-modal"
            data-term-target="searchModal"
            aria-label="Close modal"
          >
            <i class="term-icon term-icon-close" aria-hidden="true" />
          </button>
        </div>
        <div class="term-modal-body">
          <div class="term-form-group">
            <label class="term-form-label" for="searchQuery">SEARCH QUERY</label>
            <input
              id="searchQuery"
              class="term-form-control"
              type="text"
              placeholder="Type to search..."
            >
          </div>
        </div>
        <div class="term-modal-footer">
          <button
            class="term-btn term-btn-view"
            type="button"
            data-term-action="run-search"
          >
            <i class="term-icon term-icon-search" aria-hidden="true" />
            SEARCH
          </button>
        </div>
      </div>
    </div>

    <div
      id="logoutModal"
      class="term-modal-overlay"
      aria-hidden="true"
      data-term-action="close-modal"
      data-term-target="logoutModal"
    >
      <div
        class="term-modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="logoutTitle"
      >
        <div class="term-modal-header term-modal-header-danger">
          <span id="logoutTitle">Logout</span>
          <button
            class="term-btn term-btn-icon term-btn-close"
            type="button"
            data-term-action="close-modal"
            data-term-target="logoutModal"
            aria-label="Close modal"
          >
            <i class="term-icon term-icon-close" aria-hidden="true" />
          </button>
        </div>
        <div class="term-modal-body">
          <p>Are you sure you want to terminate the session?</p>
          <p style="color:var(--term-muted); font-size:12px; margin-top:10px;">
            Unsaved data will be lost.
          </p>
        </div>
        <div class="term-modal-footer">
          <button
            class="term-btn term-btn-secondary"
            type="button"
            data-term-action="close-modal"
            data-term-target="logoutModal"
          >
            CANCEL
          </button>
          <button
            class="term-btn term-btn-delete"
            type="button"
            data-term-action="confirm-logout"
          >
            <i class="term-icon term-icon-logout-box" aria-hidden="true" />
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
