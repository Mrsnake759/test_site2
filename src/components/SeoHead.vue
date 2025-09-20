<script setup lang="ts">
import { onMounted, watchEffect } from 'vue';

interface Props {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

const props = defineProps<Props>();

const setMeta = (name: string, content: string) => {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('name', name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

const setProperty = (property: string, content: string) => {
  if (typeof document === 'undefined') return;
  let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute('property', property);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
};

watchEffect(() => {
  if (props.title) {
    document.title = props.title;
    setMeta('twitter:title', props.title);
    setProperty('og:title', props.title);
  }
  if (props.description) {
    setMeta('description', props.description);
    setMeta('twitter:description', props.description);
    setProperty('og:description', props.description);
  }
  const url = props.url || window.location.href;
  setProperty('og:url', url);
  setMeta('twitter:card', 'summary_large_image');
  if (props.image) {
    setProperty('og:image', props.image);
    setMeta('twitter:image', props.image);
  }
});

onMounted(() => {
  const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (link) {
    link.href = props.url || window.location.href;
  } else {
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = props.url || window.location.href;
    document.head.appendChild(canonical);
  }
});
</script>
