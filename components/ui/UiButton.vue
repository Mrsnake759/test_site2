<template>
  <NuxtLink v-if="to" :to="to" :class="['ui-button', `is-${variant}`]">
    <slot />
  </NuxtLink>
  <button v-else :type="type" :class="['ui-button', `is-${variant}`]">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    variant?: 'primary' | 'secondary' | 'ghost'
    type?: 'button' | 'submit'
  }>(),
  {
    variant: 'primary',
    type: 'button'
  }
)
</script>

<style scoped>
.ui-button {
  appearance: none;
  border: 1px solid transparent;
  border-radius: 999px;
  padding: 12px 22px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ui-button:hover {
  transform: translateY(-1px);
}

.is-primary {
  background: var(--c-accent);
  color: #fff;
  box-shadow: 0 12px 30px rgba(181, 23, 0, 0.26);
}

.is-secondary {
  background: var(--c-dark);
  color: #fff;
  box-shadow: 0 12px 28px rgba(36, 37, 39, 0.25);
}

.is-ghost {
  background: transparent;
  color: var(--c-accent);
  border-color: var(--c-accent);
}
</style>
