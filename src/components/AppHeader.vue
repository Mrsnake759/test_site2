<template>
  <header class="header" :class="{ 'is-open': isNavOpen }">
    <AppContainer>
      <div class="header__inner">
        <RouterLink to="/" class="header__logo" aria-label="Artem Sadomtsev home">
          <span>AS</span>
        </RouterLink>
        <nav
          id="main-navigation"
          class="header__nav"
          :class="{ 'is-visible': isNavOpen }"
          aria-label="Основная навигация"
        >
          <RouterLink v-for="link in links" :key="link.to" class="header__link" :to="link.to">
            {{ link.label }}
          </RouterLink>
        </nav>
        <div class="header__actions">
          <ThemeToggle />
          <a class="header__cta" :href="profile.contacts.cvUrl" download>
            CV
          </a>
          <button
            class="header__menu"
            type="button"
            :aria-expanded="isNavOpen"
            aria-controls="main-navigation"
            aria-label="Открыть меню"
            @click="toggleNav"
          >
            <Icon :name="isNavOpen ? 'x' : 'menu'" />
          </button>
        </div>
      </div>
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ThemeToggle from './ThemeToggle.vue';
import AppContainer from './AppContainer.vue';
import Icon from './Ui/Icon.vue';
import profile from '@content/profile.json';

interface NavLink {
  label: string;
  to: string;
}

const links: NavLink[] = [
  { label: 'Главная', to: '/' },
  { label: 'Обо мне', to: '/about' },
  { label: 'Кейсы', to: '/cases' },
  { label: 'Контакты', to: '/contact' }
];

const route = useRoute();
const isNavOpen = ref(false);

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value;
};

watch(
  () => route.fullPath,
  () => {
    isNavOpen.value = false;
  }
);
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 998;
  backdrop-filter: blur(16px);
  background-color: color-mix(in srgb, var(--surface-elevated) 80%, transparent);
  border-bottom: 1px solid var(--border-subtle);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 68px;
}

.header__logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  box-shadow: var(--shadow-soft);
}

.header__nav {
  display: flex;
  gap: 1.5rem;
}

.header__link {
  color: var(--text-secondary);
  font-weight: 500;
  transition: color 0.2s ease;
}

.header__link.router-link-active,
.header__link:hover,
.header__link:focus-visible {
  color: var(--text-primary);
}

.header__actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.header__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 0.9rem;
  border-radius: 999px;
  background-color: var(--accent-primary);
  color: #fff;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.header__cta:hover,
.header__cta:focus-visible {
  transform: translateY(-1px);
  box-shadow: var(--shadow-soft);
}

.header__menu {
  display: none;
  background: none;
  border: none;
  padding: 0.4rem;
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .header__nav {
    position: absolute;
    inset: 68px 1rem auto;
    background: var(--surface-elevated);
    border: 1px solid var(--border-subtle);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    box-shadow: var(--shadow-soft);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-6px);
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .header__nav.is-visible {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .header__menu {
    display: inline-flex;
  }
}
</style>
