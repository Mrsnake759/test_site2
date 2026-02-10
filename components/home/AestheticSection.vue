<template>
  <UiSection>
    <div class="section-divider" />
    <h2>Премиальный внешний вид и фактура</h2>
    <p class="intro">
      Мы уделяем особое внимание внешнему виду изделий. Технологии ColorMix, «отмыв» и заглаживание поверхности позволяют создавать выразительные оттенки,
      натуральные фактуры и нескользящие поверхности. Решения Альфа гармонично вписываются как в современную городскую среду,
      так и в частные архитектурные проекты.
    </p>
    <div class="grid">
      <img src="/images/texture1.svg" alt="Фактура поверхности Альфа" @error="broken1 = true" v-if="!broken1" />
      <div class="placeholder-media" v-else>Texture 1</div>
      <img src="/images/texture2.svg" alt="Фактура ColorMix" @error="broken2 = true" v-if="!broken2" />
      <div class="placeholder-media" v-else>Texture 2</div>
      <UiCard class="text-card">
        Выразительные поверхности, сбалансированная палитра и аккуратная геометрия формируют цельный визуальный образ территории.
      </UiCard>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const broken1 = ref(false)
const broken2 = ref(false)
</script>

<style scoped>
h2{font-size:clamp(1.6rem,3.2vw,2.2rem);margin:28px 0 8px;color:var(--c-dark)}
.intro{margin:0 0 24px;max-width:84ch;color:var(--c-muted)}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
img{width:100%;border-radius:var(--radius-lg);box-shadow:var(--shadow);min-height:240px;object-fit:cover}
.text-card{display:grid;place-items:center;text-align:center;font-size:1.05rem;color:var(--c-dark)}
@media(max-width:900px){.grid{grid-template-columns:1fr}}
</style>
