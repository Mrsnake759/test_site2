<template>
  <section class="ui-section" :class="toneClass" :id="id">
    <UiContainer>
      <slot />
    </UiContainer>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ id?: string; tone?: 'default' | 'muted' | 'accent' }>(), {
  tone: 'default'
})

const toneClass = computed(() => {
  if (props.tone === 'muted') return 'section-muted'
  if (props.tone === 'accent') return 'section-accent'
  return ''
})
</script>

<style scoped>
.ui-section {
  padding: clamp(56px, 8vw, 74px) 0;
  position: relative;
}
</style>
