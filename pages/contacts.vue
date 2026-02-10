<template>
  <div>
    <UiSection tone="accent" class="contacts-hero">
      <div class="hero">
        <div>
          <UiChip>Контакты</UiChip>
          <h1>Контакты Альфа</h1>
          <p>Мы всегда на связи для консультаций, расчёта поставок и проектных решений по благоустройству.</p>
        </div>
        <div class="hero-media">
          <img src="/images/factory.svg" alt="Производственная площадка Альфа" @error="heroBroken = true" v-if="!heroBroken">
          <div class="placeholder-media" v-else>Contacts image</div>
        </div>
      </div>
    </UiSection>

    <UiSection>
      <div class="section-divider" />
      <div class="grid">
        <UiCard>
          <h2>Отдел продаж и проектных поставок</h2>
          <ul class="contact-list">
            <li><span>Телефон:</span> <a href="tel:+78672404240">+7 (8672) 40-42-40</a></li>
            <li><span>Телефон:</span> <a href="tel:+79618244003">+7 (961) 824-40-03</a></li>
            <li><span>Электронная почта:</span> <a href="mailto:osk21vek@mail.ru">osk21vek@mail.ru</a></li>
          </ul>
          <p>По этим контактам вы можете получить консультацию, запросить каталог или рассчитать объём поставки под ваш проект.</p>
        </UiCard>

        <UiCard>
          <h2>Режим работы</h2>
          <p class="worktime">Понедельник — пятница<br>09:00 – 18:00 (по местному времени)</p>
          <UiButton to="/#lead" variant="ghost">Запросить прайс</UiButton>
        </UiCard>
      </div>
    </UiSection>

    <UiSection tone="muted">
      <div class="section-divider" />
      <div class="map-grid">
        <div>
          <h2>Производственная площадка</h2>
          <p>Республика Северная Осетия — Алания</p>
          <p>г. Владикавказ, Черменское шоссе, 26</p>
        </div>
        <UiCard class="map-card">
          <iframe
            title="Карта производства Альфа"
            src="https://yandex.ru/map-widget/v1/?ll=44.700486%2C43.048122&z=13"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </UiCard>
      </div>
    </UiSection>

    <UiSection>
      <div class="section-divider" />
      <UiCard class="feedback">
        <div>
          <h2>Оставить заявку</h2>
          <p>Если у вас есть проект, спецификация или вопрос — оставьте заявку, и мы свяжемся с вами в ближайшее время.</p>
        </div>
        <form class="form" @submit.prevent="submit">
          <input v-model.trim="form.name" type="text" placeholder="Имя" required>
          <input v-model.trim="form.contact" type="text" placeholder="Телефон или email" required>
          <textarea v-model.trim="form.comment" rows="4" placeholder="Комментарий / описание задачи" />
          <UiButton type="submit" variant="primary">Отправить</UiButton>
        </form>
      </UiCard>
    </UiSection>

    <UiSection tone="accent">
      <div class="section-divider" />
      <UiCard>
        <h2>Проектные и оптовые поставки</h2>
        <p>
          Мы работаем с девелоперами, генподрядчиками, муниципальными и инфраструктурными проектами. Возможен расчёт объёмов,
          подбор решений и сопровождение поставок на всех этапах реализации проекта.
        </p>
      </UiCard>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const heroBroken = ref(false)

const form = reactive({
  name: '',
  contact: '',
  comment: ''
})

const submit = () => {
  alert('Заявка отправлена (демо)')
  form.name = ''
  form.contact = ''
  form.comment = ''
}

useSeoMeta({
  title: 'Контакты',
  description: 'Контакты Альфа: телефоны, почта, адрес производства и форма обратной связи.',
  ogTitle: 'Контакты — Альфа',
  ogDescription: 'Свяжитесь с отделом продаж и проектных поставок Альфа.',
  ogType: 'website'
})
</script>

<style scoped>
.hero{display:grid;grid-template-columns:1.1fr 1fr;gap:24px;align-items:center}
h1{margin:12px 0 8px;color:var(--c-dark);font-size:clamp(2rem,4vw,3rem)}
.hero p{margin:0;color:var(--c-muted)}
.hero-media img{width:100%;min-height:220px;object-fit:cover;border-radius:var(--radius-lg);box-shadow:var(--shadow-lift)}

.grid{display:grid;grid-template-columns:2fr 1fr;gap:16px;padding-top:24px}
h2{margin:0 0 10px;color:var(--c-dark);font-size:clamp(1.4rem,2.4vw,1.9rem)}
.contact-list{margin:0 0 10px;padding:0;list-style:none;display:grid;gap:8px}
.contact-list a{color:var(--alpha-red);font-weight:600}
.contact-list span{font-weight:600}
.worktime{margin-bottom:14px;color:var(--c-muted)}

.map-grid{display:grid;grid-template-columns:1fr 1.2fr;gap:18px;align-items:start;padding-top:24px}
.map-grid p{margin:0 0 8px;color:var(--c-muted)}
.map-card iframe{width:100%;height:320px;border:0;border-radius:14px}

.feedback{display:grid;grid-template-columns:1fr 1fr;gap:20px}
.feedback p{margin:0;color:var(--c-muted)}
.form{display:grid;gap:10px}
input,textarea{width:100%;border:1px solid rgba(36,37,39,.2);background:#fff;border-radius:14px;padding:12px 14px;font:inherit;color:var(--c-text)}
input:focus,textarea:focus{outline:none;box-shadow:0 0 0 3px rgba(181,23,0,.14);border-color:var(--c-accent)}

@media(max-width:960px){
  .hero,.grid,.map-grid,.feedback{grid-template-columns:1fr}
}
</style>
