<template>
  <section class="advantages">
    <UiContainer>
      <div class="grid">
        <article v-for="item in items" :key="item.title">
          <span class="dot" />
          <h3>{{ item.title }}</h3>
        </article>
      </div>
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const items = [
  { title: 'До 1 млн м² изделий в год. Контроль качества.' },
  { title: 'Форматы, фактуры и цветовые решения.' },
  { title: 'Подберём покрытие под задачу.' },
  { title: 'Современные технологии производства.' }
]
</script>

<style scoped>
.advantages{background:#242527;padding:32px 0}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
article{border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:18px;background:rgba(255,255,255,.03)}
.dot{display:block;width:10px;height:10px;border-radius:50%;background:#B51700;margin-bottom:10px}
h3{margin:0;color:rgba(255,255,255,.9);font-size:1rem;line-height:1.45}
@media(max-width:1000px){.grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:640px){.grid{grid-template-columns:1fr}}
</style>
