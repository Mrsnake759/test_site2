<template>
  <UiSection>
    <div class="hero-grid">
      <div>
        <UiChip>Премиальный бренд благоустройства</UiChip>
        <h1>Альфа — производитель премиальных изделий мощения</h1>
        <p>
          Альфа — бренд премиальных решений для благоустройства, созданный на базе индустриальной компании ОСК 21 ВЕК.
          Мы производим тротуарную плитку, брусчатку и элементы мощения для частных, городских и девелоперских проектов,
          где важны эстетика, точная геометрия и долговечность. Наши изделия формируют современную и выразительную среду —
          от частных резиденций до масштабных общественных пространств.
        </p>
        <div class="hero-actions">
          <UiButton to="/catalog" variant="primary">Перейти в каталог</UiButton>
          <UiButton to="/#lead" variant="secondary">Запросить прайс</UiButton>
        </div>
      </div>
      <div class="hero-media">
        <img src="/images/hero.svg" alt="Реализованное мощение Альфа" @error="broken = true" v-if="!broken">
        <div class="placeholder-media" v-else>Hero image</div>
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const broken = ref(false)
</script>

<style scoped>
.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(20px, 4vw, 42px);
  align-items: center;
}
h1 {
  margin: 14px 0;
  font-size: clamp(2rem, 4.6vw, 3.5rem);
  line-height: 1.1;
  color: var(--c-dark);
  max-width: 14ch;
}
p { margin: 0; color: var(--c-muted); max-width: 67ch; }
.hero-actions { margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap; }
.hero-media img { width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow); min-height: 300px; object-fit: cover; }
@media (max-width: 900px){ .hero-grid{grid-template-columns:1fr;} h1{max-width:none;} }
</style>
