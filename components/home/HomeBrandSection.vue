<template>
  <UiSection>
    <div class="section-divider" />
    <div class="layout">
      <div class="visual">
        <img src="/images/factory.svg" alt="Бренд Альфа">
        <div class="stat-badge">
          <p>ПРОИЗВОДСТВО</p>
          <strong>до 1 млн м² / год</strong>
        </div>
      </div>
      <div>
        <span class="section-tag">Бренд</span>
        <h2>Бренд «Альфа»</h2>
        <p>Мы объединяем индустриальный масштаб и архитектурную эстетику, чтобы формировать долговечную и выразительную среду.</p>
        <div class="chips">
          <UiChip v-for="chip in chips" :key="chip">{{ chip }}</UiChip>
        </div>
        <div class="actions">
          <UiButton to="/catalog" variant="primary">Перейти в каталог</UiButton>
          <UiButton to="/#contact-actions" variant="secondary">Запросить прайс</UiButton>
        </div>
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const chips = ['Премиальность', 'Ответственность', 'Эстетика', 'Качество', 'Технологичность']
</script>

<style scoped>
.layout{display:grid;grid-template-columns:1fr 1fr;gap:24px;padding-top:22px;align-items:center}
.visual{position:relative}
.visual img{width:100%;min-height:280px;object-fit:cover;border-radius:var(--radius-lg);box-shadow:var(--shadow-soft)}
.stat-badge{position:absolute;left:14px;bottom:14px;background:rgba(36,37,39,.9);color:#fff;padding:14px 16px;border-radius:14px}
.stat-badge p{margin:0 0 2px;font-size:.75rem;letter-spacing:.08em;color:#ffd4cc}
.stat-badge strong{font-size:1rem}
h2{margin:8px 0;color:var(--c-dark);font-size:clamp(1.65rem,3vw,2.3rem)}
p{margin:0 0 12px;color:var(--c-muted)}
.chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}
.actions{display:flex;gap:10px;flex-wrap:wrap}
@media(max-width:980px){.layout{grid-template-columns:1fr}}
</style>
