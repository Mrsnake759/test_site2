<template>
  <UiSection id="contact-actions" tone="accent">
    <div class="section-divider" />
    <div class="box">
      <div>
        <span class="section-tag">Контакты</span>
        <h2>Свяжитесь с нами</h2>
        <ul>
          <li>Подберём оптимальный формат покрытия под задачу.</li>
          <li>Подготовим расчёт по площади и комплектующим.</li>
          <li>Дадим рекомендации по поставке и укладке.</li>
        </ul>
      </div>
      <UiCard class="action-card">
        <UiButton to="/contacts" variant="primary">Запросить прайс</UiButton>
        <UiButton to="/contacts" variant="secondary">Получить консультацию</UiButton>
        <UiButton to="/contacts" variant="ghost">Запросить расчёт (м²)</UiButton>
        <div class="contacts">
          <a href="tel:+78672404240">+7 (8672) 40-42-40</a>
          <a href="mailto:osk21vek@mail.ru">osk21vek@mail.ru</a>
        </div>
      </UiCard>
    </div>
  </UiSection>
</template>

<style scoped>
.box{display:grid;grid-template-columns:1.1fr .9fr;gap:20px;padding-top:24px}
h2{margin:8px 0 12px;color:var(--c-dark);font-size:clamp(1.65rem,3vw,2.3rem)}
ul{margin:0;padding-left:18px;color:var(--c-muted);display:grid;gap:7px}
.action-card{background:#242527;color:#fff;display:grid;gap:10px;border-color:rgba(255,255,255,.12)}
.contacts{margin-top:8px;display:grid;gap:6px}
.contacts a{color:rgba(255,255,255,.88)}
@media(max-width:900px){.box{grid-template-columns:1fr}}
</style>
