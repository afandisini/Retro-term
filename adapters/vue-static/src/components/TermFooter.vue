<script setup>
defineProps({
  text: {
    type: String,
    default: 'Retro-term / SYS.ADMIN interface / build v2.0',
  },
});
</script>

<template>
  <footer class="term-footer term-sidebar-footer">
    {{ text }}
  </footer>
</template>
