<template>
  <UiSection tone="muted">
    <span class="section-tag">Фактуры</span>
    <h2>Эстетика поверхности</h2>
    <div class="cards">
      <UiCard v-for="item in items" :key="item.title" class="surface-card">
        <img :src="item.image" :alt="item.title">
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
        <NuxtLink to="/catalog">Смотреть в каталоге →</NuxtLink>
      </UiCard>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const items = [
  { title: 'ColorMix', text: 'Мягкие переходы оттенков для выразительной среды.', image: '/images/texture1.svg' },
  { title: 'Отмыв', text: 'Натуральная фактура поверхности с архитектурным характером.', image: '/images/texture2.svg' },
  { title: 'Заглаживание', text: 'Ровная эстетика и аккуратная геометрия покрытия.', image: '/images/hero.svg' }
]
</script>

<style scoped>
h2{margin:8px 0 18px;color:var(--c-dark);font-size:clamp(1.65rem,3vw,2.3rem)}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.surface-card img{width:100%;height:170px;object-fit:cover;border-radius:14px}
h3{margin:14px 0 8px;color:var(--c-dark)} p{margin:0 0 10px;color:var(--c-muted)} a{font-weight:700;color:var(--alpha-red)}
@media(max-width:980px){.cards{grid-template-columns:1fr}}
</style>
