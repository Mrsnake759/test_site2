<template>
  <section class="ui-section" :id="id">
    <UiContainer>
      <slot />
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<style scoped>
.ui-section {
  padding: clamp(56px, 8vw, 72px) 0;
}
</style>
