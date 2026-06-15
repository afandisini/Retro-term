<script setup>
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import TermAdminLayout from './layouts/TermAdminLayout.vue';
import Dashboard from './pages/Dashboard.vue';
import Card from './pages/Card.vue';
import Tables from './pages/Tables.vue';
import Forms from './pages/Forms.vue';
import Alert from './pages/Alert.vue';
import Badge from './pages/Badge.vue';
import Components from './pages/Components.vue';
import Grid from './pages/Grid.vue';
import Modal from './pages/Modal.vue';
import MediaObject from './pages/MediaObject.vue';
import Timeline from './pages/Timeline.vue';
import Login from './pages/Login.vue';
import { menu } from './data/menu.js';

const route = reactive({
  hash: '',
  page: 'dashboard',
  section: '',
});

const theme = ref(document.documentElement.getAttribute('data-term-theme') || 'dark');

function normalizeHash(value) {
  if (!value || value === '#') {
    return '#/dashboard';
  }

  return value;
}

function resolveRoute(hash) {
  const cleanHash = normalizeHash(hash);
  const path = cleanHash.replace(/^#/, '');
  const segments = path.split('/').filter(Boolean);
  const page = segments[0] || 'dashboard';
  const section = segments[1] || '';

  if (page === 'components') {
    return {
      hash: cleanHash,
      page: 'components',
      section,
    };
  }

  if (page === 'tables' || page === 'forms' || page === 'login' || page === 'modal' || page === 'mediaobject') {
    return {
      hash: cleanHash,
      page,
      section: '',
    };
  }

  return {
    hash: '#/dashboard',
    page: 'dashboard',
    section: '',
  };
}

function syncRoute() {
  Object.assign(route, resolveRoute(window.location.hash));
  if (window.location.hash !== route.hash) {
    window.location.hash = route.hash;
  }
}

function handleThemeChange(event) {
  theme.value = event.detail.theme;
}

const pageComponent = computed(() => {
  if (route.page === 'components' && route.section === 'cards') {
    return Card;
  }

  if (route.page === 'tables') {
    return Tables;
  }

  if (route.page === 'forms') {
    return Forms;
  }

  if (route.page === 'components' && route.section === 'alerts') {
    return Alert;
  }

  if (route.page === 'components' && route.section === 'badges') {
    return Badge;
  }

  if (route.page === 'components' && route.section === 'grid') {
    return Grid;
  }

  if (route.page === 'components' && route.section === 'timeline') {
    return Timeline;
  }

  if (route.page === 'modal') {
    return Modal;
  }

  if (route.page === 'mediaobject') {
    return MediaObject;
  }

  if (route.page === 'components') {
    return Components;
  }

  if (route.page === 'login') {
    return Login;
  }

  return Dashboard;
});

const pageTitle = computed(() => {
  if (route.page === 'components') {
    return route.section ? `COMPONENTS / ${route.section.toUpperCase()}` : 'COMPONENTS';
  }

  return route.page.toUpperCase();
});

const breadcrumb = computed(() => {
  const items = ['home', 'system'];

  if (route.page === 'components') {
    items.push('components');
    if (route.section) {
      items.push(route.section);
    }
    return items;
  }

  items.push(route.page);
  return items;
});

onMounted(() => {
  window.addEventListener('hashchange', syncRoute);
  window.addEventListener('term-theme-change', handleThemeChange);
  window.TermAdmin.init('dark', 'expanded');
  theme.value = document.documentElement.getAttribute('data-term-theme') || theme.value;
  syncRoute();
});

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', syncRoute);
  window.removeEventListener('term-theme-change', handleThemeChange);
});
</script>

<template>
  <Login
    v-if="route.page === 'login'"
    :theme="theme"
  />

  <TermAdminLayout
    v-else
    :menu="menu"
    :active-path="route.hash"
    :theme="theme"
  >
    <template #header>
      <div class="term-content-title">{{ pageTitle }}</div>
      <div class="term-breadcrumb" aria-label="Breadcrumb">
        <span
          v-for="item in breadcrumb"
          :key="item"
          class="term-breadcrumb-item"
        >
          {{ item }}
        </span>
      </div>
    </template>

    <component
      :is="pageComponent"
      :subsection="route.section"
      :theme="theme"
    />
  </TermAdminLayout>
</template>
