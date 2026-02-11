<template>
  <UiSection>
    <div class="section-divider" />
    <UiCard class="box">
      <span class="section-tag">Ассортимент</span>
      <h2>Что мы производим</h2>
      <p>
        Ассортимент Альфа включает:<br>
        — тротуарную плитку и брусчатку;<br>
        — бордюры и элементы обрамления.<br>
        Продукция разработана для комплексных решений мощения — от частных участков до масштабных общественных пространств.
      </p>
      <UiButton to="/catalog" variant="ghost">Перейти в каталог</UiButton>
    </UiCard>
  </UiSection>
</template>

<style scoped>
.box{display:grid;gap:14px;justify-items:start}
h2{margin:0;color:var(--c-dark);font-size:clamp(1.5rem,2.7vw,2rem)}
p{margin:0;color:var(--c-muted)}
</style>
