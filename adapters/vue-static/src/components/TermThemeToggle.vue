<script setup>
import { computed } from 'vue';

const props = defineProps({
  theme: {
    type: String,
    default: 'dark',
  },
  compact: {
    type: Boolean,
    default: false,
  },
});

const isLight = computed(() => props.theme === 'light');

function toggleTheme() {
  window.TermAdmin.toggleTheme();
}
</script>

<template>
  <button
    class="term-btn term-btn-theme"
    :class="{ 'term-btn-theme-compact': compact }"
    type="button"
    data-term-theme-toggle="true"
    :aria-pressed="isLight"
    :aria-label="isLight ? 'Switch to dark theme' : 'Switch to light theme'"
    @click="toggleTheme"
  >
    <i
      class="term-icon"
      :class="isLight ? 'term-icon-sun' : 'term-icon-moon'"
      aria-hidden="true"
    />
    <span
      v-if="!compact"
      class="term-theme-label"
    >
      {{ isLight ? 'LIGHT' : 'DARK' }}
    </span>
  </button>
</template>
