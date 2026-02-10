<template>
  <UiSection>
    <div class="section-divider" />
    <div class="wrap">
      <div>
        <h2>Ответственность за результат</h2>
        <p>
          Мы выстраиваем работу как долгосрочное партнёрство. Автоматизированная упаковка и складирование минимизируют риск повреждений при транспортировке,
          а производственный контроль обеспечивает стабильное качество партий. Альфа — это надёжность, предсказуемость и профессиональный подход к поставкам.
        </p>
      </div>
      <div>
        <img src="/images/shipping.svg" alt="Отгрузка и складирование" @error="broken = true" v-if="!broken" />
        <div class="placeholder-media" v-else>Shipping image</div>
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const broken = ref(false)
</script>

<style scoped>
.wrap{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center}
h2{font-size:clamp(1.6rem,3.2vw,2.2rem);margin:0 0 12px;color:var(--c-dark)}
p{margin:0;color:var(--c-muted)}
img{width:100%;min-height:240px;object-fit:cover;border-radius:var(--radius-lg);box-shadow:var(--shadow)}
@media(max-width:900px){.wrap{grid-template-columns:1fr}}
</style>
