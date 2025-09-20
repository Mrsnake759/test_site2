<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="`Переключить тему на ${nextThemeLabel}`"
    @click="toggleTheme"
    @keyup.space.prevent="toggleTheme"
    @keyup.enter.prevent="toggleTheme"
  >
    <Icon :name="theme === 'light' ? 'moon' : 'sun'" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from '@/utils/theme';
import Icon from './Ui/Icon.vue';

const { theme, toggleTheme } = useTheme();

const nextThemeLabel = computed(() => (theme.value === 'light' ? 'темную' : 'светлую'));
</script>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 999px;
  border: 1px solid var(--border-subtle);
  background: var(--surface-elevated);
  color: var(--text-secondary);
  transition: background 0.2s ease, transform 0.2s ease;
}

.theme-toggle:hover,
.theme-toggle:focus-visible {
  background: color-mix(in srgb, var(--accent-secondary) 16%, transparent);
  transform: translateY(-1px);
}
</style>
