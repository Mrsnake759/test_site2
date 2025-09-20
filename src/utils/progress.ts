import { readonly, ref } from 'vue';

const progress = ref(0);
const isActive = ref(false);
let timer: number | undefined;

const clearTimer = () => {
  if (timer) {
    window.clearInterval(timer);
    timer = undefined;
  }
};

export const startProgress = () => {
  if (typeof window === 'undefined') return;
  clearTimer();
  isActive.value = true;
  progress.value = 0;
  timer = window.setInterval(() => {
    if (progress.value < 95) {
      progress.value += (100 - progress.value) * 0.1;
    } else {
      clearTimer();
    }
  }, 200);
};

export const finishProgress = () => {
  if (typeof window === 'undefined') return;
  clearTimer();
  progress.value = 100;
  window.setTimeout(() => {
    isActive.value = false;
    progress.value = 0;
  }, 250);
};

export const useProgress = () => ({
  progress: readonly(progress),
  isActive: readonly(isActive)
});
