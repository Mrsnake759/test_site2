<template>
  <button class="chip" type="button" :class="{ 'is-active': active }" @click="handleClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{ active?: boolean }>();
const emit = defineEmits<{ (e: 'toggle'): void }>();

const handleClick = () => {
  emit('toggle');
};
</script>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid var(--border-subtle);
  background: transparent;
  color: var(--text-secondary);
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border 0.2s ease;
}

.chip:hover,
.chip:focus-visible {
  border-color: color-mix(in srgb, var(--accent-primary) 40%, var(--border-subtle));
  color: var(--text-primary);
}

.chip.is-active {
  background: color-mix(in srgb, var(--accent-primary) 18%, transparent);
  border-color: var(--accent-primary);
  color: var(--accent-on);
}
</style>
