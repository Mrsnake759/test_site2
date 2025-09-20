<template>
  <SeoHead
    title="Страница не найдена — Artem Sadomtsev"
    description="Ошибка 404. Запрошенная страница не найдена, вернитесь на главную."
  />
  <section class="not-found">
    <AppContainer>
      <div class="not-found__card">
        <h1>404</h1>
        <p>Страница, которую вы ищете, уже отправилась покорять другие проекты.</p>
        <RouterLink class="btn btn--primary" to="/">
          На главную
          <Icon name="arrow-right" />
        </RouterLink>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import SeoHead from '@/components/SeoHead.vue';
import AppContainer from '@/components/AppContainer.vue';
import Icon from '@/components/Ui/Icon.vue';
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  min-height: 60vh;
}

.not-found__card {
  text-align: center;
  padding: 4rem 2rem;
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  background: var(--surface-elevated);
  box-shadow: var(--shadow-soft);
  display: grid;
  gap: 1.5rem;
  justify-items: center;
}

.not-found__card h1 {
  font-size: clamp(3rem, 8vw, 5rem);
  margin: 0;
}
</style>
