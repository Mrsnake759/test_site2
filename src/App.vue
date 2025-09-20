<template>
  <div class="app" :class="`theme-${theme}`">
    <AppProgressBar />
    <DefaultLayout>
      <RouterView v-slot="{ Component, route }">
        <Transition name="fade-slide" mode="out-in">
          <Suspense timeout="0">
            <component :is="Component" :key="route.fullPath" />
            <template #fallback>
              <div class="app__fallback" role="status" aria-live="polite">
                <LoadingSpinner />
                <p>Загружаем раздел…</p>
              </div>
            </template>
          </Suspense>
        </Transition>
      </RouterView>
    </DefaultLayout>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import DefaultLayout from './layouts/DefaultLayout.vue';
import AppProgressBar from './components/AppProgressBar.vue';
import LoadingSpinner from './components/Ui/LoadingSpinner.vue';
import { useTheme } from './utils/theme';

const { theme } = useTheme();
</script>

<style scoped>
.app {
  min-height: 100vh;
  background-color: var(--surface-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.app__fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 4rem 1rem;
  text-align: center;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>
