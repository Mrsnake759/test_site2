<template>
  <header class="app-header">
    <div class="top-strip">
      <UiContainer class="top-inner">
        <NuxtLink to="/" class="brand" @click="closeMenu">
          <span class="brand-logo">А</span>
          <span class="brand-name">Альфа</span>
        </NuxtLink>

        <div class="top-contacts">
          <a href="tel:+78672404240">+7 (8672) 40-42-40</a>
          <button class="callback" type="button" @click="showDemo">Обратный звонок</button>
        </div>

        <UiButton to="/#contact-actions" variant="primary" class="top-cta desktop-only">Запросить прайс</UiButton>

        <button class="burger" type="button" :aria-expanded="String(menuOpen)" @click="menuOpen = !menuOpen">
          <span /><span /><span />
        </button>
      </UiContainer>
    </div>

    <div class="nav-strip">
      <UiContainer class="nav-inner">
        <nav class="menu desktop-menu">
          <NuxtLink
            v-for="item in links"
            :key="item.to"
            :to="item.to"
            class="menu-link"
            :class="{ active: isActive(item.to) }"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>
      </UiContainer>
    </div>

    <transition name="slide-fade">
      <div v-if="menuOpen" class="mobile-panel">
        <UiContainer class="mobile-inner">
          <nav class="menu mobile-menu">
            <NuxtLink
              v-for="item in links"
              :key="item.to"
              :to="item.to"
              class="menu-link"
              :class="{ active: isActive(item.to) }"
              @click="closeMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </nav>
          <UiButton to="/#contact-actions" variant="primary" @click="closeMenu">Запросить прайс</UiButton>
        </UiContainer>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()
const menuOpen = ref(false)

const links = [
  { label: 'Главная', to: '/' },
  { label: 'О компании', to: '/about' },
  { label: 'Каталог', to: '/catalog' },
  { label: 'Услуги', to: '/services' },
  { label: 'Оплата и доставка', to: '/delivery' },
  { label: 'Контакты', to: '/contacts' }
]

const isActive = (path: string) => (path === '/' ? route.path === '/' : route.path.startsWith(path))
const closeMenu = () => { menuOpen.value = false }
const showDemo = () => { alert('Заявка отправлена (демо)') }

watch(() => route.path, closeMenu)
</script>

<style scoped>
.app-header { position: sticky; top: 0; z-index: 40; box-shadow: 0 8px 28px rgba(0, 0, 0, 0.13); }
.top-strip { background: var(--alpha-dark); color: #fff; }
.top-inner { min-height: 68px; display: flex; align-items: center; gap: 16px; }
.brand { display: inline-flex; align-items: center; gap: 10px; color: #fff; }
.brand-logo { width: 34px; aspect-ratio: 1; border-radius: 50%; display: grid; place-items: center; background: var(--alpha-red); font-weight: 700; box-shadow: 0 8px 18px rgba(181,23,0,.38); }
.brand-name { font-size: 1.1rem; font-weight: 700; letter-spacing: .03em; }
.top-contacts { margin-left: auto; display: flex; align-items: center; gap: 14px; font-size: .92rem; }
.top-contacts a:hover { opacity: .85; }
.callback { border: 1px solid rgba(255,255,255,.35); color:#fff; background:transparent; border-radius:999px; padding:8px 12px; font:inherit; cursor:pointer; }
.callback:hover { background: rgba(255,255,255,.12); }
.nav-strip { background: var(--alpha-red); }
.nav-inner { min-height: 56px; display: flex; align-items: center; }
.menu { display: flex; gap: 24px; }
.menu-link { color: rgba(255,255,255,.92); font-weight: 600; font-size: .95rem; padding-bottom: 4px; position: relative; }
.menu-link::after { content:''; position:absolute; left:0; bottom:0; width:100%; height:2px; background:#fff; transform:scaleX(0); transform-origin:left; transition:transform .22s ease; }
.menu-link:hover::after, .menu-link.active::after { transform:scaleX(1); }
.burger { display:none; background:transparent; border:0; margin-left:auto; padding:4px; cursor:pointer; }
.burger span { display:block; width:24px; height:2px; background:#fff; margin:4px 0; }
.mobile-panel { background: var(--alpha-dark); border-top:1px solid rgba(255,255,255,.14); }
.mobile-inner { padding: 16px 0 18px; display:grid; gap:14px; }
.mobile-menu { display:grid; gap:8px; }
.slide-fade-enter-active,.slide-fade-leave-active{transition:all .2s ease}
.slide-fade-enter-from,.slide-fade-leave-to{opacity:0; transform:translateY(-8px)}

@media (max-width: 1024px) {
  .desktop-menu, .desktop-only { display:none; }
  .top-contacts { display:none; }
  .nav-strip { display:none; }
  .burger { display:block; }
}
</style>
