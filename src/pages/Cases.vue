<template>
  <SeoHead
    title="Кейсы и проекты — Artem Sadomtsev"
    description="Фильтруемые кейсы Артема Садомцева: продуктовый менеджмент, фронтенд и e-commerce решения."
  />
  <section class="cases">
    <AppContainer>
      <div class="cases__header reveal" ref="headerRef">
        <h1 class="section-title">Проекты и кейсы</h1>
        <p class="section-subtitle">Подборка продуктов, в которых отвечал за результат: от discovery до метрик после запуска.</p>
      </div>
      <div class="cases__filters">
        <div class="filters__group">
          <label for="case-search" class="filters__label">
            <Icon name="search" />
            <span>Поиск</span>
          </label>
          <input id="case-search" v-model="search" type="search" placeholder="Название или тег" />
        </div>
        <details class="filters__details">
          <summary>
            <Icon name="filter" />
            Расширенные фильтры
          </summary>
          <div class="filters__chips">
            <h3>Роль</h3>
            <div>
              <Chip
                v-for="role in roles"
                :key="role"
                :active="activeRoles.includes(role)"
                @toggle="toggleFilter('role', role)"
              >
                {{ role }}
              </Chip>
            </div>
            <h3>Домен</h3>
            <div>
              <Chip
                v-for="domain in domains"
                :key="domain"
                :active="activeDomains.includes(domain)"
                @toggle="toggleFilter('domain', domain)"
              >
                {{ domain }}
              </Chip>
            </div>
            <h3>Стек</h3>
            <div>
              <Chip
                v-for="tech in stacks"
                :key="tech"
                :active="activeStack.includes(tech)"
                @toggle="toggleFilter('stack', tech)"
              >
                {{ tech }}
              </Chip>
            </div>
          </div>
        </details>
      </div>
      <p v-if="!filteredCases.length" class="cases__empty">По выбранным параметрам кейсы не найдены. Попробуйте изменить фильтры.</p>
      <div class="cases__grid">
        <RouterLink
          v-for="item in filteredCases"
          :key="item.slug"
          :to="`/cases/${item.slug}`"
          class="cases__card reveal"
          :ref="observe"
        >
          <AppCard :title="item.title" :summary="item.summary" :cover="item.cover" :media-alt="item.title" clickable>
            <template #tags>
              <Tag v-for="tag in item.stack" :key="tag">{{ tag }}</Tag>
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
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue';
import type { ComponentPublicInstance } from 'vue';
import { RouterLink } from 'vue-router';
import SeoHead from '@/components/SeoHead.vue';
import AppContainer from '@/components/AppContainer.vue';
import AppCard from '@/components/AppCard.vue';
import Tag from '@/components/Ui/Tag.vue';
import Chip from '@/components/Ui/Chip.vue';
import Icon from '@/components/Ui/Icon.vue';
import cases from '@content/cases/index.json';
import { useReveal } from '@/utils/intersection';
import { uniqueValues, normalize } from '@/utils/format';

interface CaseItem {
  slug: string;
  title: string;
  summary: string;
  role: string[];
  domain: string[];
  stack: string[];
  cover: string;
  year: number;
}

const headerRef = ref<HTMLElement | null>(null);
useReveal(headerRef);

const search = ref('');
const filters = reactive({
  role: [] as string[],
  domain: [] as string[],
  stack: [] as string[]
});

const roles = computed(() => uniqueValues((cases as CaseItem[]).map((item) => item.role)));
const domains = computed(() => uniqueValues((cases as CaseItem[]).map((item) => item.domain)));
const stacks = computed(() => uniqueValues((cases as CaseItem[]).map((item) => item.stack)));

const activeRoles = computed(() => filters.role);
const activeDomains = computed(() => filters.domain);
const activeStack = computed(() => filters.stack);

const toggleFilter = (type: 'role' | 'domain' | 'stack', value: string) => {
  const target = filters[type];
  if (target.includes(value)) {
    filters[type] = target.filter((item) => item !== value);
  } else {
    filters[type] = [...target, value];
  }
};

const filteredCases = computed(() => {
  const query = normalize(search.value.trim());
  return (cases as CaseItem[]).filter((item) => {
    const matchesSearch = !query
      || normalize(item.title).includes(query)
      || item.stack.some((tag) => normalize(tag).includes(query))
      || item.role.some((tag) => normalize(tag).includes(query))
      || item.domain.some((tag) => normalize(tag).includes(query));

    const matchesRoles = !filters.role.length || filters.role.every((role) => item.role.includes(role));
    const matchesDomains = !filters.domain.length || filters.domain.every((domain) => item.domain.includes(domain));
    const matchesStack = !filters.stack.length || filters.stack.every((tech) => item.stack.includes(tech));

    return matchesSearch && matchesRoles && matchesDomains && matchesStack;
  });
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
  }, { threshold: 0.15 });

  observer.observe(element);
};
</script>

<style scoped>
.cases__header {
  max-width: 720px;
}

.cases__filters {
  margin: 2.5rem 0;
  display: grid;
  gap: 1.5rem;
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  background: var(--surface-elevated);
  padding: 1.5rem;
}

.filters__group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.filters__label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-secondary);
  font-weight: 500;
}

input[type='search'] {
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background: var(--surface-contrast);
  color: var(--text-primary);
}

input[type='search']::placeholder {
  color: var(--text-tertiary);
}

.filters__details {
  border-top: 1px solid var(--border-subtle);
  padding-top: 1.5rem;
}

.filters__details summary {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
}

.filters__chips {
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
}

.filters__chips h3 {
  margin: 0;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
}

.filters__chips div {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.cases__empty {
  margin-top: 2rem;
  color: var(--text-secondary);
}

.cases__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.5rem, 3vw, 2.5rem);
}
</style>
