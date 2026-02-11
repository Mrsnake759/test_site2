<template>
  <div>
    <UiSection tone="accent">
      <div class="page-subhero">
        <span class="section-tag">Логистика</span>
        <h1>Оплата и доставка</h1>
        <p>Условия поставки и варианты оплаты. Подробности уточняйте у менеджера.</p>
      </div>
    </UiSection>

    <UiSection>
      <div class="section-divider" />
      <div class="columns">
        <UiCard>
          <h2>Оплата</h2>
          <ul>
            <li>Оплата по счёту.</li>
            <li>Безналичный расчёт.</li>
            <li>Варианты для юридических и физических лиц.</li>
            <li>Итоговые условия фиксируются в документах поставки.</li>
          </ul>
        </UiCard>

        <UiCard>
          <h2>Доставка</h2>
          <ul>
            <li>Самовывоз со склада по согласованию.</li>
            <li>Доставка по городу и региону.</li>
            <li>Погрузка/разгрузка обсуждается отдельно.</li>
            <li>Сроки зависят от объёма и текущего графика отгрузки.</li>
          </ul>
        </UiCard>
      </div>
    </UiSection>

    <UiSection tone="muted">
      <span class="section-tag">FAQ</span>
      <h2>Частые вопросы</h2>
      <div class="faq">
        <details v-for="item in faq" :key="item.q" class="faq-item">
          <summary>{{ item.q }}</summary>
          <p>{{ item.a }}</p>
        </details>
      </div>
    </UiSection>

    <UiSection>
      <UiCard class="contact-card">
        <div>
          <h2>Нужна точная информация по вашему заказу?</h2>
          <p>Свяжитесь с менеджером — уточним объёмы, сроки и вариант отгрузки под ваш проект.</p>
        </div>
        <div class="actions">
          <a href="tel:+78672404240">+7 (8672) 40-42-40</a>
          <a href="mailto:osk21vek@mail.ru">osk21vek@mail.ru</a>
          <UiButton to="/contacts" variant="primary">Связаться</UiButton>
        </div>
      </UiCard>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const faq = [
  { q: 'Как рассчитать количество?', a: 'Пришлите площадь и схему участка — поможем рассчитать объём в м², паллетах и комплектующих.' },
  { q: 'Какие сроки производства и поставки?', a: 'Срок зависит от выбранной позиции и объёма. Уточняем после согласования спецификации.' },
  { q: 'Можно ли заказать образцы?', a: 'Да, возможность предоставления образцов обсуждается с менеджером по текущим коллекциям.' },
  { q: 'Как формируется стоимость доставки?', a: 'На стоимость влияют маршрут, тоннаж, объём партии и условия разгрузки на объекте.' },
  { q: 'Можно ли забрать со склада?', a: 'Да, самовывоз возможен по предварительному согласованию даты и времени отгрузки.' }
]

useSeoMeta({
  title: 'Оплата и доставка',
  description: 'Условия оплаты и доставки продукции Альфа, FAQ и контакты для уточнения деталей поставки.',
  ogTitle: 'Оплата и доставка — Альфа',
  ogDescription: 'Уточните условия поставки и оплаты у менеджера Альфа.',
  ogType: 'website'
})
</script>

<style scoped>
.columns{display:grid;grid-template-columns:1fr 1fr;gap:16px;padding-top:24px}
h2{margin:0 0 12px;color:var(--c-dark);font-size:clamp(1.4rem,2.7vw,1.9rem)}
ul{margin:0;padding-left:18px;color:var(--c-muted);display:grid;gap:8px}
.faq{margin-top:14px;display:grid;gap:10px}
.faq-item{border:1px solid rgba(36,37,39,.12);border-radius:14px;background:#fff;padding:12px 14px;box-shadow:var(--shadow)}
summary{cursor:pointer;color:var(--c-dark);font-weight:700;list-style:none}
summary::-webkit-details-marker{display:none}
.faq-item p{margin:10px 0 2px;color:var(--c-muted)}
.contact-card{background:#242527;color:#fff;display:grid;grid-template-columns:1.2fr .8fr;gap:20px}
.contact-card h2{color:#fff}
.contact-card p{color:rgba(255,255,255,.74);margin:0}
.actions{display:grid;align-content:center;gap:10px}
.actions a{color:rgba(255,255,255,.92)}
@media(max-width:860px){.columns{grid-template-columns:1fr}.contact-card{grid-template-columns:1fr}}
</style>
