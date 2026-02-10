<template>
  <article class="ui-card">
    <slot />
  </article>
</template>

<style scoped>
.ui-card {
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(36, 37, 39, 0.1);
  box-shadow: var(--shadow);
  padding: clamp(18px, 2.4vw, 28px);
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
}

.ui-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-soft);
  border-color: rgba(181, 23, 0, 0.25);
}
</style>
