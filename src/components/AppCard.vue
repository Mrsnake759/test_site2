<template>
  <article class="card" :class="{ 'is-clickable': clickable }">
    <div class="card__media" v-if="cover">
      <img :src="cover" :alt="mediaAlt" loading="lazy" decoding="async" />
    </div>
    <div class="card__body">
      <header class="card__header">
        <Tag v-if="badge">{{ badge }}</Tag>
        <slot name="meta"></slot>
      </header>
      <h3 class="card__title">
        <slot name="title">{{ title }}</slot>
      </h3>
      <p v-if="summary" class="card__summary">
        <slot name="summary">{{ summary }}</slot>
      </p>
      <div v-if="$slots.tags" class="card__tags">
        <slot name="tags"></slot>
      </div>
      <footer v-if="$slots.footer" class="card__footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
import Tag from './Ui/Tag.vue';

defineProps({
  title: {
    type: String,
    default: ''
  },
  summary: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  cover: {
    type: String,
    default: ''
  },
  mediaAlt: {
    type: String,
    default: ''
  },
  clickable: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  border-radius: 1.25rem;
  border: 1px solid var(--border-subtle);
  background: var(--surface-elevated);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  height: 100%;
}

.card.is-clickable:hover,
.card.is-clickable:focus-within {
  transform: translateY(-6px);
  box-shadow: var(--shadow-soft);
}

.card__media {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
}

.card__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.card__title {
  font-size: 1.25rem;
  font-weight: 600;
}

.card__summary {
  color: var(--text-secondary);
  flex-grow: 1;
}

.card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.card__footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary);
}
</style>
