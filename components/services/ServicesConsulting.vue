<template>
  <UiSection id="consulting">
    <div class="section-divider" />
    <div class="grid">
      <div>
        <span class="section-tag">Консультация</span>
        <h2>Подбор продукции под задачи проекта</h2>
        <p>
          Мы помогаем подобрать оптимальные решения мощения с учётом назначения объекта, архитектурной концепции, условий эксплуатации и визуальных требований.
        </p>
        <p>
          Консультация позволяет избежать ошибок на этапе выбора и обеспечить единый стиль пространства.
        </p>
      </div>
      <div class="visual">
        <img src="/images/services/consulting.svg" alt="Подбор фактур покрытия" @error="broken = true" v-if="!broken">
        <div class="placeholder-media" v-else>Consulting visual</div>
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const broken = ref(false)
</script>

<style scoped>
.grid{display:grid;grid-template-columns:1.05fr .95fr;gap:24px;align-items:center;padding-top:22px}
h2{margin:10px 0 12px;color:var(--c-dark);font-size:clamp(1.7rem,3vw,2.4rem)}
p{margin:0 0 10px;color:var(--c-muted)}
.visual img{width:100%;min-height:270px;object-fit:cover;border-radius:var(--radius-lg);box-shadow:var(--shadow-soft)}
@media(max-width:900px){.grid{grid-template-columns:1fr}}
</style>
