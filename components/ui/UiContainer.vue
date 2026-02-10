<template>
  <component :is="tag" class="ui-container">
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ tag?: string }>(), {
  tag: 'div'
})
</script>

<style scoped>
.ui-container {
  width: min(1160px, calc(100% - 40px));
  margin-inline: auto;
}

@media (max-width: 640px) {
  .ui-container {
    width: min(1160px, calc(100% - 28px));
  }
}
</style>
