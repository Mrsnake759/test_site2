<template>
  <header class="app-header">
    <UiContainer tag="nav" class="header-inner">
      <NuxtLink to="/" class="brand">
        <span class="brand-badge">А</span>
        <span>Альфа</span>
      </NuxtLink>

      <ul class="menu">
        <li v-for="item in links" :key="item.to">
          <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
        </li>
      </ul>

      <UiButton to="/#lead" variant="primary">Запросить прайс</UiButton>
    </UiContainer>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: 'Главная', to: '/' },
  { label: 'О компании', to: '/about' },
  { label: 'Каталог', to: '/catalog' },
  { label: 'Услуги', to: '/services' },
  { label: 'Оплата и доставка', to: '/delivery' },
  { label: 'Контакты', to: '/contacts' }
]
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);
  background: rgba(246, 247, 248, 0.88);
  border-bottom: 1px solid rgba(36, 37, 39, 0.08);
}

.header-inner {
  min-height: 78px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  color: var(--c-dark);
}

.brand-badge {
  width: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--c-dark);
  color: white;
}

.menu {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 16px;
  font-size: 0.92rem;
  color: var(--c-muted);
  flex: 1;
  overflow: auto;
}

.menu a.router-link-active {
  color: var(--c-dark);
  font-weight: 600;
}

@media (max-width: 1024px) {
  .header-inner {
    flex-wrap: wrap;
    padding: 10px 0;
  }

  .menu {
    order: 3;
    flex-basis: 100%;
    padding-bottom: 8px;
  }
}
</style>
