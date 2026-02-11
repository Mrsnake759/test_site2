<template>
  <UiSection tone="muted">
    <span class="section-tag">Продукция</span>
    <h2>Изделия, которые создают пространство</h2>
    <div class="cards">
      <UiCard v-for="item in items" :key="item.title">
        <div class="icon">{{ item.icon }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </UiCard>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const items = [
  { icon: '◼', title: 'Плитка', text: 'Форматы для аккуратных частных и общественных покрытий.' },
  { icon: '▦', title: 'Бордюры', text: 'Чёткое обрамление дорожек, парковок и входных зон.' },
  { icon: '▤', title: 'Ограждения', text: 'Архитектурные элементы для завершённого визуального образа.' }
]
</script>

<style scoped>
h2{margin:8px 0 18px;color:var(--c-dark);font-size:clamp(1.65rem,3vw,2.3rem)}
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.icon{width:40px;height:40px;border-radius:10px;background:rgba(181,23,0,.1);color:var(--alpha-red);display:grid;place-items:center;font-weight:800}
h3{margin:12px 0 8px;color:var(--c-dark)} p{margin:0;color:var(--c-muted)}
@media(max-width:900px){.cards{grid-template-columns:1fr}}
</style>
