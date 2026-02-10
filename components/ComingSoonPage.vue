<template>
  <UiSection>
    <UiCard class="soon">
      <UiChip>Раздел в разработке</UiChip>
      <h1>{{ title }}</h1>
      <p>Скоро</p>
      <UiButton to="/" variant="secondary">На главную</UiButton>
    </UiCard>
  </UiSection>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<style scoped>
.soon{display:grid;justify-items:start;gap:12px;max-width:680px}
h1{margin:0;color:var(--c-dark);font-size:clamp(1.8rem,4.5vw,2.8rem)}
p{margin:0;color:var(--c-muted)}
</style>
