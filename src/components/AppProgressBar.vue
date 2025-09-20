<template>
  <div class="progress" role="presentation" aria-hidden="true">
    <div class="progress__bar" :class="{ 'is-active': isActive }" :style="{ transform: `scaleX(${progress / 100})` }"></div>
  </div>
</template>

<script setup lang="ts">
import { useProgress } from '@/utils/progress';

const { progress, isActive } = useProgress();
</script>

<style scoped>
.progress {
  position: fixed;
  inset: 0 0 auto 0;
  height: 3px;
  width: 100%;
  transform-origin: left center;
  pointer-events: none;
  z-index: 999;
}

.progress__bar {
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  transform-origin: left center;
  transform: scaleX(0);
  opacity: 0;
  transition: opacity 0.2s ease;
}

.progress__bar.is-active {
  opacity: 1;
}
</style>
