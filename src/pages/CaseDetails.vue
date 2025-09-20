<template>
  <section v-if="caseItem" class="case">
    <SeoHead
      :title="`${caseItem.title} — кейс Artem Sadomtsev`"
      :description="caseItem.context"
      :image="caseItem.cover || caseItem.gallery?.[0]"
    />
    <div class="case__hero">
      <img v-if="caseItem.cover" :src="caseItem.cover" :alt="caseItem.title" loading="lazy" decoding="async" />
      <div class="case__overlay"></div>
      <AppContainer>
        <div class="case__intro reveal" ref="heroRef">
          <Tag v-for="role in caseItem.role" :key="role">{{ role }}</Tag>
          <h1>{{ caseItem.title }}</h1>
          <p class="case__context">{{ caseItem.context }}</p>
          <div class="case__meta">
            <div>
              <h3>Цели</h3>
              <ul>
                <li v-for="goal in caseItem.goals" :key="goal">{{ goal }}</li>
              </ul>
            </div>
            <div>
              <h3>Результаты</h3>
              <ul>
                <li v-for="metric in caseItem.results" :key="metric.label">
                  <span>{{ metric.label }}</span>
                  <strong>{{ metric.value }}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </AppContainer>
    </div>
    <AppContainer>
      <section class="case__body">
        <article class="case__section reveal" :ref="observe">
          <h2>Роль и вклад</h2>
          <p>{{ caseItem.contribution }}</p>
        </article>
        <article class="case__section reveal" :ref="observe">
          <h2>Процесс</h2>
          <ol>
            <li v-for="step in caseItem.process" :key="step">{{ step }}</li>
          </ol>
        </article>
        <article class="case__section reveal" :ref="observe">
          <h2>Технологии</h2>
          <div class="case__tags">
            <Tag v-for="tech in caseItem.stack" :key="tech">{{ tech }}</Tag>
          </div>
        </article>
        <article class="case__section reveal" :ref="observe" v-if="caseItem.gallery?.length">
          <h2>Галерея</h2>
          <div class="case__gallery">
            <img
              v-for="(image, index) in caseItem.gallery"
              :key="image"
              :src="image"
              :alt="`${caseItem.title} — экран ${index + 1}`"
              loading="lazy"
              decoding="async"
            />
          </div>
        </article>
      </section>
      <div class="case__actions">
        <RouterLink v-if="nextCase" class="btn btn--primary" :to="`/cases/${nextCase.slug}`">
          Следующий кейс — {{ nextCase.title }}
          <Icon name="arrow-right" />
        </RouterLink>
        <RouterLink class="btn btn--ghost" to="/cases">
          Назад ко всем кейсам
        </RouterLink>
      </div>
    </AppContainer>
  </section>
  <section v-else class="case__empty">
    <AppContainer>
      <p>Кейс не найден.</p>
      <RouterLink class="btn btn--ghost" to="/cases">Вернуться к списку</RouterLink>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import { useRoute, useRouter, RouterLink } from 'vue-router';
import SeoHead from '@/components/SeoHead.vue';
import AppContainer from '@/components/AppContainer.vue';
import Tag from '@/components/Ui/Tag.vue';
import Icon from '@/components/Ui/Icon.vue';
import cases from '@content/cases/index.json';
import { useReveal } from '@/utils/intersection';

interface CaseDetail {
  title: string;
  slug: string;
  cover?: string;
  role: string[];
  context: string;
  contribution: string;
  goals: string[];
  process: string[];
  results: { label: string; value: string }[];
  stack: string[];
  gallery?: string[];
}

interface CaseSummary {
  slug: string;
  title: string;
}

const heroRef = ref<HTMLElement | null>(null);
useReveal(heroRef);

const route = useRoute();
const router = useRouter();

const modules = import.meta.glob('@content/cases/*.json', { eager: true, import: 'default' }) as Record<string, unknown>;
const map = computed(() => {
  const entries = Object.values(modules).filter((item): item is CaseDetail => {
    return typeof item === 'object' && item !== null && 'slug' in item && typeof (item as { slug?: unknown }).slug === 'string';
  });
  return Object.fromEntries(entries.map((item) => [item.slug, item]));
});

const caseItem = computed<CaseDetail | undefined>(() => {
  const slug = String(route.params.slug || '');
  return map.value[slug];
});

watchEffect(() => {
  if (!caseItem.value) {
    const slug = route.params.slug;
    if (slug) {
      router.replace({ name: 'not-found' });
    }
  }
});

const nextCase = computed(() => {
  const items = cases as CaseSummary[];
  const currentIndex = items.findIndex((item) => item.slug === caseItem.value?.slug);
  if (currentIndex === -1) return undefined;
  return items[(currentIndex + 1) % items.length];
});

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
.case__hero {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.case__hero img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4);
}

.case__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(120deg, rgba(99, 102, 241, 0.65), rgba(59, 130, 246, 0.35));
  mix-blend-mode: multiply;
}

.case__intro {
  position: relative;
  z-index: 1;
  color: #fff;
  max-width: 720px;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.case__intro h1 {
  font-size: clamp(2.2rem, 5vw, 3rem);
  margin: 0;
}

.case__context {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.86);
}

.case__meta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.case__meta h3 {
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.case__meta ul {
  margin: 0;
  padding-left: 1.2rem;
  display: grid;
  gap: 0.4rem;
}

.case__meta li {
  color: rgba(255, 255, 255, 0.85);
}

.case__meta strong {
  display: block;
  font-size: 1.3rem;
}

.case__body {
  display: grid;
  gap: 2.5rem;
  margin-top: 3rem;
}

.case__section h2 {
  margin-top: 0;
}

.case__section p,
.case__section ol {
  color: var(--text-secondary);
}

.case__section ol {
  padding-left: 1.2rem;
  display: grid;
  gap: 0.5rem;
}

.case__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.case__gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
}

.case__gallery img {
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  width: 100%;
  height: auto;
}

.case__actions {
  margin: 3rem 0 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.case__empty {
  padding: 4rem 0;
  text-align: center;
}
</style>
