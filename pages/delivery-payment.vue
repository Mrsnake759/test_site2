<template>
  <div>
    <UiSection tone="accent">
      <div class="hero">
        <span class="section-tag">Оплата и доставка</span>
        <h1>Оплата и доставка</h1>
        <p>
          Работаем по предзаказу и заранее согласовываем условия оплаты, производства и график отгрузки под конкретный проект.
        </p>
      </div>
    </UiSection>

    <UiSection>
      <div class="section-divider" />
      <UiCard class="principle">
        <h2>1. Общий принцип работы</h2>
        <p>
          Альфа работает по предзаказу с производством и отгрузкой продукции под конкретный объём и проект. Условия оплаты и поставки формируются на этапе согласования заказа и могут корректироваться в зависимости от формата сотрудничества.
        </p>
      </UiCard>
    </UiSection>

    <UiSection tone="muted">
      <span class="section-tag">Шаги</span>
      <h2>2. Этапы оформления и исполнения заказа</h2>
      <div class="steps">
        <article v-for="(step, index) in steps" :key="step.title" class="step-card">
          <span class="step-index">{{ index + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>
        </article>
      </div>
    </UiSection>

    <UiSection>
      <div class="cards">
        <UiCard v-for="item in infoBlocks" :key="item.title" class="info-card">
          <div class="icon" v-html="item.icon" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </UiCard>
      </div>
    </UiSection>

    <UiSection tone="accent">
      <UiCard class="individual">
        <h2>7. Индивидуальные условия</h2>
        <p>
          Для проектных, оптовых и партнёрских заказов возможны индивидуальные условия по: графику оплаты; этапности производства; поэтапной доставке; долгосрочному сотрудничеству. Все индивидуальные условия обсуждаются и фиксируются на этапе согласования заказа.
        </p>
      </UiCard>
    </UiSection>

    <UiSection>
      <UiCard class="cta">
        <div>
          <span class="section-tag">Контакты</span>
          <h2>Готовы обсудить ваш проект?</h2>
          <p>Подготовим предварительные условия и подберём оптимальный формат сотрудничества.</p>
          <p class="note">Примечание: условия индивидуальны и фиксируются при подтверждении заказа.</p>
        </div>
        <div class="actions">
          <UiButton to="/contacts" variant="primary">Запросить прайс</UiButton>
          <UiButton to="/contacts" variant="secondary">Связаться</UiButton>
        </div>
      </UiCard>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const steps = [
  {
    title: 'Запрос от клиента',
    text: 'Клиент направляет запрос с указанием продукции, объёмов и предполагаемых сроков.'
  },
  {
    title: 'Уточнение и расчёт',
    text: 'Мы уточняем детали проекта, при необходимости выполняем расчёт объёмов и формируем спецификацию.'
  },
  {
    title: 'Согласование условий',
    text: 'Согласовываются: ассортимент и объёмы; сроки производства; условия оплаты; формат и график доставки.'
  },
  {
    title: 'Подтверждение заказа',
    text: 'Заказ считается подтверждённым после согласования всех условий и выполнения договорённостей по оплате.'
  }
]

const infoBlocks = [
  {
    title: '3. Оплата',
    text: 'Базовая модель оплаты: оплата осуществляется по согласованному графику; для стандартных заказов применяется предоплата; для проектных и регулярных поставок возможны поэтапные схемы оплаты. Конкретные условия оплаты определяются индивидуально и фиксируются при подтверждении заказа.',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18v10H3zM6 10h6"/></svg>'
  },
  {
    title: '4. Производство',
    text: 'Производство продукции запускается после подтверждения заказа и выполнения согласованных условий оплаты. Сроки производства зависят от ассортимента, объёма заказа и текущей загрузки производственной линии.',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 18h16M6 18V8l4 2V6l4 2V4l4 2v12"/></svg>'
  },
  {
    title: '5. Доставка',
    text: 'Доставка продукции осуществляется с производственной площадки Альфа. Базовый подход к доставке: способ доставки подбирается с учётом региона и объёма заказа; возможна отгрузка одной партией или поэтапно, в соответствии с графиком проекта; сроки доставки согласовываются заранее.',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h12v8H3zM15 10h3l3 3v2h-6zM7 18a1 1 0 1 0 0 .01M17 18a1 1 0 1 0 0 .01"/></svg>'
  },
  {
    title: '6. Упаковка и отгрузка',
    text: 'Вся продукция проходит автоматизированную упаковку и складирование. Это обеспечивает сохранность изделий при транспортировке и удобство разгрузки на объекте.',
    icon: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7l9-4 9 4-9 4-9-4zm0 0v10l9 4 9-4V7"/></svg>'
  }
]

useSeoMeta({
  title: 'Оплата и доставка — Альфа',
  description: 'Оплата и доставка, предзаказ и проектные поставки Альфа: этапы оформления, условия оплаты, производство и логистика.',
  ogTitle: 'Оплата и доставка — Альфа',
  ogDescription: 'Оплата, доставка, предзаказ и проектные поставки: условия согласуются индивидуально.',
  ogType: 'website'
})
</script>

<style scoped>
.hero{max-width:860px;background:rgba(255,255,255,.86);border:1px solid rgba(36,37,39,.1);border-radius:24px;padding:clamp(22px,4vw,38px);box-shadow:var(--shadow)}
h1{margin:10px 0 10px;font-size:clamp(2rem,4vw,3rem);color:var(--c-dark)}
.hero p{margin:0;color:var(--c-muted)}

.principle h2,.individual h2,.cta h2{margin:0 0 10px;color:var(--c-dark);font-size:clamp(1.5rem,2.8vw,2rem)}
.principle p,.individual p,.cta p{margin:0;color:var(--c-muted)}

.steps{margin-top:14px;display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.step-card{background:#fff;border:1px solid rgba(36,37,39,.1);border-radius:16px;padding:16px;box-shadow:var(--shadow);position:relative}
.step-index{width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:var(--alpha-red);color:#fff;font-size:.82rem;font-weight:700;margin-bottom:10px}
.step-card h3{margin:0 0 8px;color:var(--c-dark);font-size:1rem}
.step-card p{margin:0;color:var(--c-muted);font-size:.93rem}

.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.info-card .icon{width:36px;height:36px;border-radius:10px;background:rgba(181,23,0,.1);display:grid;place-items:center;margin-bottom:10px}
.info-card .icon :deep(svg){width:20px;height:20px;fill:none;stroke:var(--alpha-red);stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
.info-card h3{margin:0 0 8px;color:var(--c-dark);font-size:1.1rem}
.info-card p{margin:0;color:var(--c-muted)}

.individual{border-left:4px solid var(--alpha-red)}
.cta{display:grid;grid-template-columns:1.2fr .8fr;gap:18px;align-items:center}
.note{margin-top:10px;font-size:.9rem;color:rgba(36,37,39,.66)!important}
.actions{display:grid;gap:10px}

@media(max-width:980px){.steps{grid-template-columns:repeat(2,1fr)}.cards{grid-template-columns:1fr}.cta{grid-template-columns:1fr}}
@media(max-width:640px){.steps{grid-template-columns:1fr}.actions :deep(.ui-button){width:100%}}
</style>
