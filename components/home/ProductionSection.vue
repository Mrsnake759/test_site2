<template>
  <UiSection tone="muted">
    <div class="section-divider" />
    <div class="wrap">
      <div>
        <span class="section-tag">Производственная база</span>
        <h2>Индустриальная база и масштаб</h2>
        <p>
          Производство Альфа расположено в Республике Северная Осетия — Алания и основано на индустриальных мощностях ОСК 21 ВЕК.
          Проектная мощность предприятия — до 1 млн м² изделий в год, что позволяет стабильно обеспечивать поставки как для частных заказов,
          так и для крупных девелоперских и муниципальных проектов.
        </p>
        <UiCard class="stat">1 млн м²/год</UiCard>
      </div>
      <div class="photos">
        <img src="/images/factory.svg" alt="Производство Альфа" @error="brokenMain = true" v-if="!brokenMain" />
        <div class="placeholder-media" v-else>Factory image</div>
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const brokenMain = ref(false)
</script>

<style scoped>
.wrap{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center;padding-top:26px}
h2{font-size:clamp(1.6rem,3.2vw,2.2rem);margin:8px 0 12px;color:var(--c-dark)}
p{margin:0;color:var(--c-muted)}
.stat{display:inline-block;margin-top:20px;font-size:1.3rem;font-weight:700;color:var(--c-accent)}
img{width:100%;border-radius:var(--radius-lg);box-shadow:var(--shadow-lift);min-height:270px;object-fit:cover}
@media(max-width:900px){.wrap{grid-template-columns:1fr}}
</style>
