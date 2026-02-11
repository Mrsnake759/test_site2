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

.is-primary:active { background: #9c1400; }

.is-secondary {
  background: rgba(36, 37, 39, 0.04);
  color: var(--c-dark);
  border-color: rgba(36, 37, 39, 0.35);
}

.is-secondary:hover {
  border-color: var(--c-dark);
  background: rgba(36, 37, 39, 0.09);
}

.is-secondary:active { background: rgba(36, 37, 39, 0.14); }

.is-ghost {
  background: rgba(181, 23, 0, 0.02);
  color: var(--c-accent);
  border-color: var(--c-accent);
}

.is-ghost:hover { background: rgba(181, 23, 0, 0.09); }
.is-ghost:active { background: rgba(181, 23, 0, 0.15); }
</style>
