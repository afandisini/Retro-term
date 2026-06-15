<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import TermThemeToggle from './TermThemeToggle.vue';

const props = defineProps({
  theme: {
    type: String,
    default: 'dark',
  },
});

const clock = ref('--:--:--');
let timerId = null;

function updateClock() {
  clock.value = new Date().toLocaleTimeString('en-GB');
}

function toggleSidebar() {
  window.TermAdmin.toggleSidebar();
}

function openSearch() {
  window.TermAdmin.openModal('searchModal');
}

function toggleDropdown(event) {
  const button = event.currentTarget;
  const dropdown = button.closest('[data-term-dropdown]');
  if (!dropdown) {
    return;
  }

  const willOpen = !dropdown.classList.contains('term-is-open');
  document.querySelectorAll('[data-term-dropdown]').forEach((node) => {
    node.classList.remove('term-is-open');
  });

  if (willOpen) {
    dropdown.classList.add('term-is-open');
  }
}

function closeDropdowns() {
  document.querySelectorAll('[data-term-dropdown]').forEach((node) => {
    node.classList.remove('term-is-open');
  });
}

function handleAction(action, message, type = 'info') {
  if (action === 'profile') {
    window.TermAdmin.toast('Profile page is not available in this adapter.', 'info');
    return;
  }

  if (action === 'logout') {
    window.TermAdmin.openModal('logoutModal');
  }
}

onMounted(() => {
  updateClock();
  timerId = window.setInterval(updateClock, 1000);
  document.addEventListener('click', closeDropdowns);
});

onBeforeUnmount(() => {
  if (timerId) {
    window.clearInterval(timerId);
  }
  document.removeEventListener('click', closeDropdowns);
});
</script>

<template>
  <header class="term-header">
    <div class="term-nav-left">
      <button
        class="term-btn term-btn-icon"
        type="button"
        aria-label="Toggle sidebar"
        @click="toggleSidebar"
      >
        <i class="term-icon term-icon-menu" aria-hidden="true" />
      </button>

      <div class="term-brand">
        <span>Retro-term</span>
        <span class="term-brand-subtext">vue static</span>
      </div>
    </div>

    <div
      class="term-status-bar"
      aria-label="System status"
    >
      <TermThemeToggle
        :theme="theme"
        compact
      />

      <button
        class="term-btn term-btn-icon term-btn-search"
        type="button"
        data-term-action="open-modal"
        data-term-target="searchModal"
        aria-label="Search"
        @click="openSearch"
      >
        <i class="term-icon term-icon-search" aria-hidden="true" />
      </button>

      <div
        class="term-dropdown"
        data-term-dropdown
      >
        <button
          class="term-btn term-btn-icon term-btn-notification"
          type="button"
          data-term-action="toggle-dropdown"
          aria-label="Notifications"
          @click.stop="toggleDropdown"
        >
          <i class="term-icon term-icon-notification-fill" aria-hidden="true" />
        </button>
        <div
          class="term-dropdown-menu term-dropdown-menu-notification"
          role="menu"
          aria-label="Notifications"
        >
          <button class="term-dropdown-item" type="button" @click="window.TermAdmin.toast('System backup completed.', 'info')">
            <i class="term-icon term-icon-info term-menu-icon" aria-hidden="true" />
            <span class="term-menu-text">System backup completed</span>
          </button>
          <button class="term-dropdown-item" type="button" @click="window.TermAdmin.toast('High CPU usage detected.', 'warning')">
            <i class="term-icon term-icon-warning term-menu-icon" aria-hidden="true" />
            <span class="term-menu-text">High CPU usage detected</span>
          </button>
          <button class="term-dropdown-item" type="button" @click="window.TermAdmin.toast('Deployment finished.', 'success')">
            <i class="term-icon term-icon-success-circle term-menu-icon" aria-hidden="true" />
            <span class="term-menu-text">Deployment finished</span>
          </button>
          <div class="term-dropdown-footer">
            <span>All Notifications</span>
          </div>
        </div>
      </div>

      <div
        class="term-dropdown"
        data-term-dropdown
      >
        <button
          class="term-btn term-btn-user"
          type="button"
          data-term-action="toggle-dropdown"
          aria-label="User menu"
          @click.stop="toggleDropdown"
        >
          <i class="term-icon term-icon-person-circle" aria-hidden="true" />
          <span>Sigianto</span>
        </button>
        <div
          class="term-dropdown-menu term-dropdown-menu-user"
          role="menu"
          aria-label="User menu"
        >
          <button class="term-dropdown-item" type="button" @click="handleAction('profile')">
            <i class="term-icon term-icon-user" aria-hidden="true" />
            <span>Profile</span>
          </button>
          <button class="term-dropdown-item" type="button" @click="handleAction('logout')">
            <i class="term-icon term-icon-logout" aria-hidden="true" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <span>{{ clock }}</span>
    </div>
  </header>
</template>

