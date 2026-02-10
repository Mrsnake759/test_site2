<template>
  <UiSection>
    <div class="section-divider" />
    <div class="wrap">
      <div>
        <h2>Технологии, которые формируют качество</h2>
        <p>
          Производство оснащено автоматизированной линией PRENSOLAND (Испания) с вибропрессом COMPACTA ALFA.
          Используем технологии двойного вибропрессования, высокочастотную вибрацию и автоматические пропарочные камеры.
          Это обеспечивает прочность, стабильную геометрию изделий и высокую эксплуатационную надёжность.
          Контроль качества встроен в каждый этап производственного процесса.
        </p>
      </div>
      <div class="items">
        <UiCard><h3>Автоматизированная линия</h3><p>Европейская производственная логика и стабильность этапов.</p></UiCard>
        <UiCard><h3>Стабильная геометрия</h3><p>Точное формование и контролируемая прочность каждой партии.</p></UiCard>
        <UiCard><h3>Системный контроль</h3><p>Контроль качества встроен в процесс от сырья до упаковки.</p></UiCard>
      </div>
    </div>
  </UiSection>
</template>

<style scoped>
.wrap{display:grid;grid-template-columns:1.15fr 1fr;gap:26px;align-items:start}
h2{font-size:clamp(1.6rem,3.2vw,2.2rem);margin:0 0 12px;color:var(--c-dark)}
p{margin:0;color:var(--c-muted)}
.items{display:grid;gap:14px}
h3{margin:0 0 8px;font-size:1.06rem;color:var(--c-dark)}
.items p{font-size:0.95rem}
@media(max-width:900px){.wrap{grid-template-columns:1fr}}
</style>
