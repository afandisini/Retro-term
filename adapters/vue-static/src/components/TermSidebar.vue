<script setup>
import TermMenuItem from './TermMenuItem.vue';
import TermFooter from './TermFooter.vue';

const props = defineProps({
  menu: {
    type: Array,
    required: true,
  },
  activePath: {
    type: String,
    default: '#/dashboard',
  },
  footerText: {
    type: String,
    default: 'Retro-term / SYS.ADMIN interface / build v2.0',
  },
});

function navigate(path) {
  window.location.hash = path;
  if (window.innerWidth <= 768) {
    window.TermAdmin.closeSidebar();
  }
}
</script>

<template>
  <aside class="term-sidebar" aria-label="Main navigation">
    <nav class="term-menu">
      <TermMenuItem
        v-for="item in menu"
        :key="item.path || item.label"
        :item="item"
        :active-path="activePath"
        @navigate="navigate"
      />
    </nav>

    <TermFooter :text="footerText" />
  </aside>
</template>
