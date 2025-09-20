<template>
  <div class="layout">
    <a class="skip-link" href="#main">Перейти к основному содержимому</a>
    <AppHeader />
    <main id="main" class="layout__main">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<style scoped>
.layout__main {
  padding-top: 2rem;
}

.skip-link {
  position: absolute;
  left: -999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.skip-link:focus {
  left: 1rem;
  top: 1rem;
  width: auto;
  height: auto;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  background: var(--surface-elevated);
  box-shadow: var(--shadow-soft);
  z-index: 1000;
}
</style>
