<template>
  <span class="icon" v-html="svg" :style="inlineStyle" aria-hidden="true"></span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 20
  }
});

const modules = import.meta.glob('@/assets/icons/*.svg', { eager: true, query: '?raw', import: 'default' });

const svg = computed(() => {
  const key = `/src/assets/icons/${props.name}.svg`;
  return modules[key] ?? '';
});

const inlineStyle = computed(() => ({
  width: typeof props.size === 'number' ? `${props.size}px` : props.size,
  height: typeof props.size === 'number' ? `${props.size}px` : props.size
}));
</script>

<style scoped>
.icon {
  display: inline-flex;
  line-height: 0;
  color: currentColor;
}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
  stroke-width: 1.8;
}
</style>
