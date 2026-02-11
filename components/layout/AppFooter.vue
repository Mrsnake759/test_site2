<template>
  <footer class="app-footer">
    <UiContainer class="footer-inner">
      <div>
        <strong>Альфа</strong>
        <p>Премиальные изделия мощения для частных и городских проектов.</p>
      </div>
      <div class="footer-contacts">
        <a href="tel:+78672404240">+7 (8672) 40-42-40</a>
        <a href="mailto:osk21vek@mail.ru">osk21vek@mail.ru</a>
      </div>
    </UiContainer>
  </footer>
</template>

<style scoped>
.app-footer { background: #1f2022; color: rgba(255,255,255,.9); padding: 36px 0 42px; margin-top: 32px; }
.footer-inner { display:flex; justify-content:space-between; gap:18px; }
p{margin:8px 0 0; color:rgba(255,255,255,.7)}
.footer-contacts{display:grid;gap:8px;text-align:right}
@media(max-width:700px){.footer-inner{flex-direction:column}.footer-contacts{text-align:left}}
</style>
