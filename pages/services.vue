<template>
  <div>
    <UiSection tone="accent">
      <div class="page-subhero">
        <span class="section-tag">Сервис</span>
        <h1>Услуги</h1>
        <p>Подбор, расчёт, поставка и сопровождение проектов.</p>
      </div>
    </UiSection>

    <UiSection>
      <div class="section-divider" />
      <div class="cards">
        <UiCard v-for="item in services" :key="item.title" class="service-card">
          <div class="icon">{{ item.icon }}</div>
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
          <UiButton to="/contacts" variant="ghost">Оставить заявку</UiButton>
        </UiCard>
      </div>
    </UiSection>

    <UiSection>
      <UiCard class="cta-box">
        <div>
          <span class="section-tag">CTA</span>
          <h2>Нужен расчёт? Ответим быстро</h2>
          <p>Поможем определить объёмы, подобрать формат и согласовать поставку под сроки проекта.</p>
        </div>
        <div class="cta-actions">
          <UiButton to="/contacts" variant="primary">Запросить расчёт</UiButton>
          <UiButton to="/contacts" variant="secondary">Получить консультацию</UiButton>
        </div>
      </UiCard>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const services = [
  { icon: '▣', title: 'Подбор плитки и формата', text: 'Подбираем решения под архитектуру объекта, нагрузки и визуальный стиль территории.' },
  { icon: '◫', title: 'Расчёт количества и логистика', text: 'Рассчитываем объём в м²/паллетах, подготавливаем схему отгрузки и план поставки.' },
  { icon: '▤', title: 'Консультация по бордюрам и ограждениям', text: 'Помогаем собрать комплект для аккуратного и долговечного обрамления покрытия.' },
  { icon: '◧', title: 'Проектные поставки', text: 'Сопровождаем девелоперские и инфраструктурные проекты с единым стандартом качества.' },
  { icon: '◩', title: 'Подбор фактур и цветов', text: 'Рекомендуем сочетания коллекций, чтобы пространство выглядело цельно и премиально.' },
  { icon: '◪', title: 'Сопровождение до отгрузки', text: 'Держим связь на этапах согласования спецификации, упаковки и передачи продукции.' }
]

useSeoMeta({
  title: 'Услуги',
  description: 'Услуги Альфа: подбор форматов, расчёт объёмов, проектные поставки и сопровождение.',
  ogTitle: 'Услуги — Альфа',
  ogDescription: 'Подбор, расчёт, поставка и сопровождение проектов благоустройства.',
  ogType: 'website'
})
</script>

<style scoped>
.cards{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;padding-top:24px}
.service-card .icon{width:42px;height:42px;border-radius:12px;background:rgba(181,23,0,.1);color:var(--alpha-red);display:grid;place-items:center;font-weight:800}
h2{margin:14px 0 8px;color:var(--c-dark);font-size:1.18rem}
p{margin:0 0 12px;color:var(--c-muted)}
.cta-box{background:#242527;color:#fff;display:grid;grid-template-columns:1.2fr .8fr;gap:20px}
.cta-box h2{color:#fff;margin-top:10px}
.cta-box p{color:rgba(255,255,255,.72)}
.cta-actions{display:grid;align-content:center;gap:10px}
@media(max-width:1040px){.cards{grid-template-columns:repeat(2,1fr)}}
@media(max-width:760px){.cards{grid-template-columns:1fr}.cta-box{grid-template-columns:1fr}}
</style>
