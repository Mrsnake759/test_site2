<template>
  <header class="app-header">
    <div class="top-strip">
      <UiContainer class="top-inner">
        <NuxtLink to="/" class="brand" @click="closeMenu">
          <span class="brand-badge">А</span>
          <span class="brand-title">Альфа</span>
        </NuxtLink>

        <div class="contact-line">
          <a href="tel:+78672404240">+7 (8672) 40-42-40</a>
          <a href="tel:+79618244003">+7 (961) 824-40-03</a>
          <button class="callback" type="button" @click="showCallback">Обратный звонок</button>
        </div>

        <button class="burger" type="button" :aria-expanded="String(menuOpen)" @click="menuOpen = !menuOpen">
          <span />
          <span />
          <span />
        </button>
      </UiContainer>
    </div>

    <div class="nav-strip">
      <UiContainer class="nav-inner">
        <ul class="menu desktop-menu">
          <li v-for="item in links" :key="item.to">
            <NuxtLink :to="item.to">{{ item.label }}</NuxtLink>
          </li>
        </ul>

        <UiButton to="/#lead" variant="secondary" class="header-cta">Запросить прайс</UiButton>
      </UiContainer>
    </div>

    <transition name="mobile-panel">
      <div v-if="menuOpen" class="mobile-panel">
        <UiContainer class="mobile-inner">
          <ul class="menu mobile-menu">
            <li v-for="item in links" :key="item.to">
              <NuxtLink :to="item.to" @click="closeMenu">{{ item.label }}</NuxtLink>
            </li>
          </ul>
          <UiButton to="/#lead" variant="primary" @click="closeMenu">Запросить прайс</UiButton>
        </UiContainer>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)

const links = [
  { label: 'Главная', to: '/' },
  { label: 'О компании', to: '/about' },
  { label: 'Каталог', to: '/catalog' },
  { label: 'Услуги', to: '/services' },
  { label: 'Оплата и доставка', to: '/delivery-payment' },
  { label: 'Контакты', to: '/contacts' }
]

const closeMenu = () => {
  menuOpen.value = false
}

const showCallback = () => {
  alert('Заявка отправлена (демо)')
}
</script>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.top-strip {
  background: var(--alpha-dark);
  color: rgba(255, 255, 255, 0.92);
}

.top-inner {
  min-height: 64px;
  display: flex;
  align-items: center;
  gap: 18px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #fff;
}

.brand-badge {
  width: 32px;
  aspect-ratio: 1;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--alpha-red);
  color: #fff;
  font-weight: 700;
  box-shadow: 0 8px 18px rgba(181, 23, 0, 0.45);
}

.brand-title {
  font-weight: 700;
  letter-spacing: 0.03em;
}

.contact-line {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 0.9rem;
}

.contact-line a {
  opacity: 0.92;
  transition: opacity 0.2s ease;
}

.contact-line a:hover {
  opacity: 1;
}

.callback {
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
  background: transparent;
  border-radius: 999px;
  padding: 7px 12px;
  font: inherit;
  cursor: pointer;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.callback:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.65);
}

.nav-strip {
  background: var(--alpha-red);
}

.nav-inner {
  min-height: 58px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.menu {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 22px;
}

.desktop-menu {
  flex: 1;
}

.menu a {
  color: rgba(255, 255, 255, 0.92);
  font-size: 0.94rem;
  font-weight: 600;
  position: relative;
  padding-bottom: 4px;
  transition: color 0.2s ease;
}

.menu a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.2s ease;
}

.menu a:hover::after,
.menu a.router-link-active::after {
  transform: scaleX(1);
}

.header-cta {
  background: #fff !important;
  color: var(--alpha-red) !important;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2) !important;
}

.burger {
  display: none;
  border: none;
  background: transparent;
  padding: 4px;
  margin-left: auto;
  cursor: pointer;
}

.burger span {
  display: block;
  width: 24px;
  height: 2px;
  margin: 4px 0;
  background: #fff;
}

.mobile-panel {
  background: var(--alpha-dark);
  border-top: 1px solid rgba(255, 255, 255, 0.15);
}

.mobile-inner {
  padding: 16px 0 20px;
  display: grid;
  gap: 16px;
}

.mobile-menu {
  display: grid;
  gap: 8px;
}

.mobile-menu a {
  display: inline-block;
  padding: 6px 0;
}

.mobile-panel-enter-active,
.mobile-panel-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-panel-enter-from,
.mobile-panel-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 1050px) {
  .desktop-menu,
  .header-cta,
  .contact-line {
    display: none;
  }

  .burger {
    display: block;
  }

  .top-inner {
    min-height: 58px;
  }

  .nav-strip {
    display: none;
  }
}
</style>
