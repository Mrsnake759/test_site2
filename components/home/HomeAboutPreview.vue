<template>
  <UiSection>
    <div class="section-divider" />
    <div class="layout">
      <div>
        <span class="section-tag">О компании</span>
        <h2>О компании</h2>
      </div>
      <div>
        <p>Альфа — бренд премиальных решений мощения, созданный на индустриальной базе ОСК 21 ВЕК. Мы производим изделия для частных резиденций, городских территорий и девелоперских проектов.</p>
        <p>Главный фокус — выразительная эстетика, стабильная геометрия и предсказуемое качество в каждой поставке.</p>
        <NuxtLink to="/about" class="more-link">Читать дальше →</NuxtLink>
      </div>
    </div>
  </UiSection>
</template>

<style scoped>
.layout{display:grid;grid-template-columns:.8fr 1.2fr;gap:24px;padding-top:22px}
h2{margin:8px 0 0;color:var(--c-dark);font-size:clamp(1.65rem,3vw,2.3rem)}
p{margin:0 0 12px;color:var(--c-muted)}
.more-link{font-weight:700;color:var(--alpha-red)}
@media(max-width:900px){.layout{grid-template-columns:1fr}}
</style>
