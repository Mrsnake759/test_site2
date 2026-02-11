<template>
  <UiSection id="support" tone="accent">
    <div class="wrap">
      <div class="visual">
        <img src="/images/services/support.svg" alt="Сопровождение партнёров" @error="broken = true" v-if="!broken">
        <div class="placeholder-media" v-else>Support visual</div>
      </div>
      <div>
        <span class="section-tag">Сопровождение</span>
        <h2>Сопровождение на всех этапах</h2>
        <p>
          Мы сопровождаем клиентов и партнёров на всех этапах взаимодействия — от первого запроса до завершения поставок. Альфа выстраивает работу как долгосрочное сотрудничество, ориентированное на стабильный результат.
        </p>
        <UiButton to="/contacts" variant="primary">Запросить консультацию</UiButton>
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const broken = ref(false)
</script>

<style scoped>
.wrap{display:grid;grid-template-columns:.95fr 1.05fr;gap:22px;align-items:center}
.visual img{width:100%;min-height:250px;object-fit:cover;border-radius:var(--radius-lg);box-shadow:var(--shadow-soft)}
h2{margin:10px 0 10px;color:var(--c-dark);font-size:clamp(1.65rem,3vw,2.25rem)}
p{margin:0 0 14px;color:var(--c-muted)}
@media(max-width:900px){.wrap{grid-template-columns:1fr}}
</style>
