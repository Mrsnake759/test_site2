<template>
  <UiSection id="logistics">
    <div class="section-divider" />
    <div class="grid">
      <div class="visual">
        <img src="/images/services/logistics.svg" alt="Логистика и отгрузка" @error="broken = true" v-if="!broken">
        <div class="placeholder-media" v-else>Logistics image</div>
      </div>
      <UiCard>
        <span class="section-tag">Логистика</span>
        <h2>Логистика и отгрузка</h2>
        <p>
          Мы организуем отгрузку продукции с учётом графика строительства и особенностей объекта. Автоматизированная упаковка и складирование минимизируют риск повреждений при транспортировке.
        </p>
        <small>Надёжная упаковка и аккуратная передача партий на каждом этапе.</small>
      </UiCard>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const broken = ref(false)
</script>

<style scoped>
.grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:center;padding-top:22px}
.visual img{width:100%;min-height:260px;object-fit:cover;border-radius:var(--radius-lg);box-shadow:var(--shadow-soft)}
h2{margin:10px 0 10px;color:var(--c-dark);font-size:clamp(1.65rem,3vw,2.25rem)}
p{margin:0 0 10px;color:var(--c-muted)}
small{color:var(--c-muted)}
@media(max-width:900px){.grid{grid-template-columns:1fr}}
</style>
