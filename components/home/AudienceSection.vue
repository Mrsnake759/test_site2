<template>
  <UiSection>
    <div class="section-divider" />
    <h2>Решения для разных задач</h2>
    <div class="cards">
      <UiCard v-for="item in items" :key="item.title">
        <h3>{{ item.title }}</h3>
        <p>{{ item.text }}</p>
      </UiCard>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const items = [
  {
    title: 'Девелоперы и генподрядчики',
    text: 'масштаб, стабильность поставок, единый стандарт качества.'
  },
  {
    title: 'Муниципальные и инфраструктурные проекты',
    text: 'долговечность и эксплуатационная надёжность.'
  },
  {
    title: 'Архитекторы и дизайнеры',
    text: 'выразительная палитра и фактуры.'
  },
  {
    title: 'Частные заказчики',
    text: 'эстетика, статус и комфорт эксплуатации.'
  }
]
</script>

<style scoped>
h2{font-size:clamp(1.6rem,3.2vw,2.2rem);margin:28px 0 18px;color:var(--c-dark)}
.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
h3{margin:0 0 8px;color:var(--c-dark);font-size:1rem}
p{margin:0;color:var(--c-muted);font-size:.95rem}
@media(max-width:1024px){.cards{grid-template-columns:repeat(2,1fr)}}
@media(max-width:640px){.cards{grid-template-columns:1fr}}
</style>
