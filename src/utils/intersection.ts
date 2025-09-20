import { onBeforeUnmount, onMounted, Ref } from 'vue';

export const useReveal = (target: Ref<HTMLElement | null>, options?: IntersectionObserverInit) => {
  let observer: IntersectionObserver | null = null;

  const createObserver = () => {
    if (!target.value || typeof window === 'undefined') return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer?.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      ...options
    });

    observer.observe(target.value);
  };

  onMounted(() => {
    createObserver();
  });

  onBeforeUnmount(() => {
    if (observer && target.value) {
      observer.unobserve(target.value);
    }
    observer?.disconnect();
    observer = null;
  });
};
