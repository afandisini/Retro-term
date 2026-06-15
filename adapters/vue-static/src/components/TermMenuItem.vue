<script setup>
import { computed, ref, watch } from 'vue';

defineOptions({
  name: 'TermMenuItem',
});

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  activePath: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['navigate']);

function isActiveRoute(item, activePath) {
  if (!item || !item.path) {
    return false;
  }

  return item.path === activePath;
}

function hasActiveDescendant(item, activePath) {
  if (!item.children || !item.children.length) {
    return false;
  }

  return item.children.some((child) => {
    if (isActiveRoute(child, activePath)) {
      return true;
    }

    return hasActiveDescendant(child, activePath);
  });
}

const open = ref(hasActiveDescendant(props.item, props.activePath));
const isLeafActive = computed(() => isActiveRoute(props.item, props.activePath));

watch(
  () => props.activePath,
  (nextActivePath) => {
    open.value = hasActiveDescendant(props.item, nextActivePath);
  }
);

const isTreeOpen = computed(() => open.value);

function navigate(path) {
  emit('navigate', path);
}

function handleToggle() {
  open.value = !open.value;
}
</script>

<template>
  <div v-if="item.type === 'header'" class="term-menu-header">
    {{ item.label }}
  </div>

  <div
    v-else-if="item.children && item.children.length"
    class="term-menu-group"
    :class="{ 'term-menu-open': isTreeOpen }"
  >
    <button
      class="term-menu-item term-menu-link"
      :class="{ 'term-menu-active': isTreeOpen }"
      type="button"
      @click="handleToggle"
    >
      <i
        v-if="item.icon"
        class="term-icon term-menu-icon"
        :class="item.icon"
        aria-hidden="true"
      />
      <span class="term-menu-text">{{ item.label }}</span>
      <i class="term-icon term-icon-chevron-right term-menu-arrow" aria-hidden="true" />
    </button>

    <div class="term-menu-tree">
      <TermMenuItem
        v-for="child in item.children"
        :key="child.path || child.label"
        :item="child"
        :active-path="activePath"
        @navigate="navigate"
      />
    </div>
  </div>

  <a
    v-else
    class="term-menu-item term-menu-link term-menu-tree-item"
    :class="{ 'term-menu-active': isLeafActive }"
    :href="item.path || '#/dashboard'"
    :aria-current="isLeafActive ? 'page' : undefined"
    @click.prevent="navigate(item.path || '#/dashboard')"
  >
    <i
      v-if="item.icon"
      class="term-icon term-menu-icon"
      :class="item.icon"
      aria-hidden="true"
    />
    <span class="term-menu-text">{{ item.label }}</span>
  </a>
</template>
