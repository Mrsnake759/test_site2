<template>
  <SeoHead
    title="Artem Sadomtsev — IT Project Manager / Frontend Developer"
    description="Портфолио Артема Садомцева: управление IT-проектами, разработка интерфейсов и цифровые продукты."
  />
  <section class="hero">
    <AppContainer>
      <div ref="heroRef" class="hero__grid reveal">
        <div class="hero__intro">
          <p class="hero__eyebrow">{{ profile.location }}</p>
          <h1>{{ profile.name }}</h1>
          <p class="hero__role">{{ profile.role }}</p>
          <p class="hero__summary">{{ profile.summary }}</p>
          <div class="hero__actions">
            <a class="btn btn--primary" :href="profile.contacts.cvUrl" download>
              <Icon name="download" />
              <span>Скачать CV</span>
            </a>
            <RouterLink class="btn btn--ghost" to="/contact">
              <Icon name="send" />
              <span>Связаться</span>
            </RouterLink>
          </div>
          <ul class="hero__meta" aria-label="Основные навыки">
            <li v-for="skill in profile.skills" :key="skill">
              <Tag>{{ skill }}</Tag>
            </li>
          </ul>
        </div>
        <div class="hero__card">
          <article>
            <p>Работаю на стыке продукта и фронтенда: вывожу MVP за 6–8 недель, организую процессы и команду.</p>
            <p>Сочетание аналитики, UX и разработки помогает выстраивать решения, которые измеримо влияют на метрики.</p>
          </article>
        </div>
      </div>
    </AppContainer>
  </section>
  <section class="cases">
    <AppContainer>
      <header class="section-header reveal" ref="casesHeaderRef">
        <div>
          <h2 class="section-title">Выбранные кейсы</h2>
          <p class="section-subtitle">От B2B-порталов до e-commerce и SaaS — фокус на результат.</p>
        </div>
        <RouterLink class="link" to="/cases">
          Смотреть все кейсы
          <Icon name="arrow-right" />
        </RouterLink>
      </header>
      <div class="cases__grid">
        <RouterLink
          v-for="item in featuredCases"
          :key="item.slug"
          :to="`/cases/${item.slug}`"
          class="cases__item reveal"
          :ref="observe"
        >
          <AppCard :title="item.title" :summary="item.summary" :cover="item.cover" :media-alt="item.title" clickable>
            <template #tags>
              <Tag v-for="role in item.role" :key="role">{{ role }}</Tag>
            </template>
            <template #footer>
              <span>{{ item.year }}</span>
              <Icon name="arrow-up-right" />
            </template>
          </AppCard>
        </RouterLink>
      </div>
    </AppContainer>
  </section>
  <section class="skills">
    <AppContainer>
      <div class="skills__grid">
        <div class="reveal" ref="skillsIntroRef">
          <h2 class="section-title">Сильные стороны</h2>
          <p class="section-subtitle">Навыки, которые помогают доводить проекты до результата.</p>
        </div>
        <ul class="skills__list">
          <li v-for="item in skillTags" :key="item.label" class="skills__item reveal" :ref="observe">
            <Icon :name="item.icon" />
            <div>
              <h3>{{ item.label }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </AppContainer>
  </section>
  <section class="testimonials">
    <AppContainer>
      <div class="testimonials__header reveal" ref="testimonialsHeaderRef">
        <h2 class="section-title">Отзывы коллег</h2>
        <p class="section-subtitle">Люди, с которыми работали плечом к плечу.</p>
      </div>
      <div class="testimonials__grid">
        <article
          v-for="testimonial in testimonialsList"
          :key="testimonial.author"
          class="testimonial reveal"
          :ref="observe"
        >
          <p class="testimonial__quote">“{{ testimonial.quote }}”</p>
          <div class="testimonial__meta">
            <p class="testimonial__author">{{ testimonial.author }}</p>
            <p class="testimonial__role">{{ testimonial.role }}</p>
          </div>
        </article>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import { RouterLink } from 'vue-router';
import SeoHead from '@/components/SeoHead.vue';
import AppContainer from '@/components/AppContainer.vue';
import AppCard from '@/components/AppCard.vue';
import Tag from '@/components/Ui/Tag.vue';
import Icon from '@/components/Ui/Icon.vue';
import profile from '@content/profile.json';
import casesData from '@content/cases/index.json';
import testimonialsData from '@content/testimonials.json';
import { useReveal } from '@/utils/intersection';

interface CaseItem {
  slug: string;
  title: string;
  summary: string;
  role: string[];
  cover: string;
  year: number;
}

interface Testimonial {
  author: string;
  role: string;
  quote: string;
}

const heroRef = ref<HTMLElement | null>(null);
const casesHeaderRef = ref<HTMLElement | null>(null);
const skillsIntroRef = ref<HTMLElement | null>(null);
const testimonialsHeaderRef = ref<HTMLElement | null>(null);

useReveal(heroRef);
useReveal(casesHeaderRef);
useReveal(skillsIntroRef);
useReveal(testimonialsHeaderRef);

const testimonialsList = testimonialsData as Testimonial[];
const observe = (el: Element | ComponentPublicInstance | null) => {
  const element = el instanceof HTMLElement ? el : null;
  if (!element) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(element);
};

const caseList = casesData as CaseItem[];
const featuredCases = computed<CaseItem[]>(() => caseList.slice(0, 3));

const skillTags = computed(() => [
  {
    label: 'Product Discovery',
    description: 'Формулирую гипотезы, строю CJM и roadmap на основе данных и интервью.',
    icon: 'search'
  },
  {
    label: 'Frontend Engineering',
    description: 'Проектирую архитектуру, пишу чистый Vue/TypeScript-код и внедряю CI/CD.',
    icon: 'arrow-up-right'
  },
  {
    label: 'Delivery & Команда',
    description: 'Настраиваю процессы, метрики и прозрачную коммуникацию с заказчиком.',
    icon: 'filter'
  }
]);
</script>

<style scoped>
.hero {
  padding-top: 6rem;
}

.hero__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(2rem, 5vw, 3.5rem);
  align-items: center;
}

.hero__intro {
  grid-column: span 7;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.hero__eyebrow {
  font-family: var(--font-alt);
  font-weight: 600;
  color: var(--accent-primary);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.hero__role {
  font-size: 1.25rem;
  color: var(--text-secondary);
}

.hero__summary {
  max-width: 520px;
  color: var(--text-secondary);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.hero__meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  list-style: none;
}

.hero__card {
  grid-column: span 5;
  background: var(--surface-elevated);
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 3vw, 2rem);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-soft);
}

.hero__card p {
  margin: 0 0 1rem;
  color: var(--text-secondary);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
}

.section-subtitle {
  color: var(--text-secondary);
  max-width: 460px;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--accent-primary);
  font-weight: 600;
}

.cases__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
  margin-top: 2.5rem;
}

.skills__grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(12, 1fr);
}

.skills__list {
  grid-column: span 8;
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  list-style: none;
  margin: 0;
  padding: 0;
}

.skills__item {
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background: var(--surface-elevated);
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skills__item:hover,
.skills__item:focus-within {
  transform: translateY(-4px);
  box-shadow: var(--shadow-soft);
}

.skills__item h3 {
  margin: 0 0 0.35rem;
  font-size: 1.1rem;
}

.skills__item p {
  margin: 0;
  color: var(--text-secondary);
}

.testimonials {
  background: color-mix(in srgb, var(--accent-secondary) 6%, transparent);
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.testimonial {
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background: var(--surface-contrast);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.testimonial__quote {
  font-size: 1.05rem;
  margin: 0;
}

.testimonial__author {
  font-weight: 600;
  margin: 0;
}

.testimonial__role {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
}

@media (max-width: 1024px) {
  .hero__grid {
    grid-template-columns: 1fr;
  }

  .hero__intro,
  .hero__card {
    grid-column: span 12;
  }

  .skills__grid {
    grid-template-columns: 1fr;
  }

  .skills__list {
    grid-column: span 12;
  }
}
</style>
