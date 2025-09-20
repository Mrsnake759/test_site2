<template>
  <div class="app-container">
    <slot />
  </div>
</template>

<style scoped>
.app-container {
  width: min(1100px, 100% - 2rem);
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
}
</style>
