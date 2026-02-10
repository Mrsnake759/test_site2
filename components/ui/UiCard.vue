<template>
  <article class="ui-card">
    <slot />
  </article>
</template>

<style scoped>
.ui-card {
  border-radius: var(--radius-lg);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(36, 37, 39, 0.08);
  box-shadow: var(--shadow);
  padding: clamp(18px, 2.4vw, 26px);
}
</style>
