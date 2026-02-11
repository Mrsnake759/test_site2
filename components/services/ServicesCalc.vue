<template>
  <UiSection id="calc" tone="muted">
    <span class="section-tag">Комплектация</span>
    <h2>Расчёт объёмов и комплектация</h2>
    <p class="intro">
      По запросу мы выполняем расчёт необходимого объёма продукции и помогаем сформировать спецификацию под проект. Это упрощает планирование закупок и снижает риск перерасхода материалов.
    </p>
    <div class="cards">
      <UiCard>
        <h3>Расчёт объёма</h3>
        <p>Прозрачная оценка потребности по м² с учётом особенностей проекта.</p>
      </UiCard>
      <UiCard>
        <h3>Спецификация</h3>
        <p>Формируем комплект номенклатуры для закупки и согласования поставки.</p>
      </UiCard>
    </div>
  </UiSection>
</template>

<style scoped>
h2{margin:10px 0 8px;color:var(--c-dark);font-size:clamp(1.65rem,3vw,2.3rem)}
.intro{margin:0;color:var(--c-muted);max-width:84ch}
.cards{margin-top:16px;display:grid;grid-template-columns:1fr 1fr;gap:14px}
h3{margin:0 0 8px;color:var(--c-dark)}
p{margin:0;color:var(--c-muted)}
@media(max-width:760px){.cards{grid-template-columns:1fr}}
</style>
