<template>
  <span class="ui-chip">
    <slot />
  </span>
</template>

<style scoped>
.ui-chip {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 7px 14px;
  font-size: 0.82rem;
  color: var(--c-accent);
  background: rgba(181, 23, 0, 0.08);
  border: 1px solid rgba(181, 23, 0, 0.22);
  font-weight: 600;
}
</style>
