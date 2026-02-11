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
  font-weight: 700;
  font-size: 0.94rem;
  cursor: pointer;
  transition: transform 0.22s ease, box-shadow 0.22s ease, background-color 0.22s ease, color 0.22s ease, border-color 0.22s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.ui-button:hover { transform: translateY(-2px); }
.ui-button:active { transform: translateY(0); }

.ui-button:focus-visible {
  outline: 3px solid rgba(181, 23, 0, 0.35);
  outline-offset: 2px;
}

.is-primary {
  background: var(--c-accent);
  color: #fff;
  box-shadow: 0 12px 26px rgba(181, 23, 0, 0.28);
}

.is-primary:hover {
  box-shadow: 0 16px 30px rgba(181, 23, 0, 0.33);
  background: #cb1d04;
}

.is-primary:active {
  background: #9c1400;
}

.is-secondary {
  background: var(--c-dark);
  color: #fff;
  box-shadow: 0 12px 24px rgba(36, 37, 39, 0.28);
}

.is-secondary:hover {
  box-shadow: 0 15px 28px rgba(36, 37, 39, 0.34);
  background: #1c1d1f;
}

.is-secondary:active {
  background: #121314;
}

.is-ghost {
  background: rgba(255, 255, 255, 0.1);
  color: var(--c-accent);
  border-color: var(--c-accent);
}

.is-ghost:hover {
  background: rgba(181, 23, 0, 0.08);
}

.is-ghost:active {
  background: rgba(181, 23, 0, 0.14);
}
</style>
