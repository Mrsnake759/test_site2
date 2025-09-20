<template>
  <SeoHead
    title="Обо мне — Artem Sadomtsev"
    description="Опыт Артема Садомцева: управление продуктами, фронтенд-разработка и построение кросс-функциональных команд."
  />
  <section class="about">
    <AppContainer>
      <div class="about__hero reveal" ref="heroRef">
        <div class="about__portrait">
          <img src="/assets/images/profile-portrait.webp" alt="Artem Sadomtsev" loading="lazy" decoding="async" />
        </div>
        <div class="about__summary">
          <h1>Привет! Я Artem Sadomtsev</h1>
          <p>{{ about.bio }}</p>
          <ul class="about__values">
            <li v-for="value in about.approach" :key="value">
              <Icon name="arrow-right" />
              <span>{{ value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </AppContainer>
  </section>
  <section class="timeline">
    <AppContainer>
      <div class="timeline__header reveal" ref="timelineRef">
        <h2 class="section-title">Опыт и вехи</h2>
        <p class="section-subtitle">От продуктового менеджмента до построения фронтенд-команд.</p>
      </div>
      <ol class="timeline__list">
        <li v-for="item in about.experience" :key="item.company" class="timeline__item reveal" :ref="observe">
          <div class="timeline__marker"></div>
          <div class="timeline__content">
            <div class="timeline__meta">
              <h3>{{ item.company }}</h3>
              <span>{{ item.period }}</span>
            </div>
            <p class="timeline__role">{{ item.role }}</p>
            <ul>
              <li v-for="achievement in item.achievements" :key="achievement">{{ achievement }}</li>
            </ul>
          </div>
        </li>
      </ol>
    </AppContainer>
  </section>
  <section class="awards">
    <AppContainer>
      <div class="awards__header reveal" ref="awardsRef">
        <h2 class="section-title">Сертификаты и награды</h2>
        <p class="section-subtitle">Постоянно развиваюсь, чтобы приносить больше ценности командам и бизнесу.</p>
      </div>
      <div class="awards__grid">
        <article v-for="cert in about.certifications" :key="cert.title" class="award reveal" :ref="observe">
          <h3>{{ cert.title }}</h3>
          <p class="award__issuer">{{ cert.issuer }} · {{ cert.year }}</p>
          <p>{{ cert.description }}</p>
        </article>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import SeoHead from '@/components/SeoHead.vue';
import AppContainer from '@/components/AppContainer.vue';
import Icon from '@/components/Ui/Icon.vue';
import about from '@content/about.json';
import { useReveal } from '@/utils/intersection';

const heroRef = ref<HTMLElement | null>(null);
const timelineRef = ref<HTMLElement | null>(null);
const awardsRef = ref<HTMLElement | null>(null);

useReveal(heroRef);
useReveal(timelineRef);
useReveal(awardsRef);

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
</script>

<style scoped>
.about__hero {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(2rem, 4vw, 3.5rem);
  align-items: center;
}

.about__portrait {
  grid-column: span 4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about__portrait img {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid color-mix(in srgb, var(--accent-secondary) 40%, transparent);
  box-shadow: var(--shadow-soft);
}

.about__summary {
  grid-column: span 8;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about__summary p {
  max-width: 560px;
  color: var(--text-secondary);
}

.about__values {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 0.75rem;
}

.about__values li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  color: var(--text-secondary);
}

.timeline {
  background: color-mix(in srgb, var(--accent-primary) 6%, transparent);
}

.timeline__list {
  list-style: none;
  margin: 3rem 0 0;
  padding: 0;
  display: grid;
  gap: 2.5rem;
  position: relative;
}

.timeline__list::before {
  content: '';
  position: absolute;
  top: 0.5rem;
  bottom: 0;
  left: 1rem;
  width: 2px;
  background: color-mix(in srgb, var(--accent-primary) 30%, transparent);
}

.timeline__item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  position: relative;
  padding-left: 2rem;
}

.timeline__marker {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--accent-primary) 18%, transparent);
  position: absolute;
  left: 0.25rem;
  top: 0.5rem;
}

.timeline__meta {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.timeline__meta h3 {
  margin: 0;
}

.timeline__meta span {
  color: var(--text-secondary);
}

.timeline__role {
  margin: 0.5rem 0;
  font-weight: 600;
}

.timeline__content ul {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--text-secondary);
  display: grid;
  gap: 0.4rem;
}

.awards__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 2.5rem;
}

.award {
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background: var(--surface-elevated);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.award__issuer {
  margin: 0;
  color: var(--text-secondary);
  font-weight: 500;
}

.award p {
  margin: 0;
  color: var(--text-secondary);
}

@media (max-width: 960px) {
  .about__hero {
    grid-template-columns: 1fr;
  }

  .about__portrait,
  .about__summary {
    grid-column: span 12;
    text-align: center;
  }

  .about__values {
    justify-items: center;
  }

  .timeline__list::before {
    left: 0.5rem;
  }

  .timeline__item {
    padding-left: 1.5rem;
  }
}
</style>
