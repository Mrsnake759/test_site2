<template>
  <UiCard class="product-card">
    <NuxtLink :to="`/catalog/${product.slug}`" class="product-media">
      <img v-if="product.heroImage" :src="product.heroImage" :alt="product.name" loading="lazy" />
      <div v-else class="fallback">Альфа</div>
    </NuxtLink>

    <div class="card-body">
      <p class="type">{{ product.typeLabel }}</p>
      <h3>{{ product.shortName }}</h3>
      <p class="price">от {{ product.priceFrom }} ₽ / {{ unitLabel[product.priceUnit] }}</p>
      <p class="params">{{ paramsLine }}</p>

      <div class="tags">
        <UiChip v-for="tag in product.tags.slice(0, 4)" :key="tag">{{ tag }}</UiChip>
      </div>

      <UiButton :to="`/catalog/${product.slug}`" variant="primary" class="details-btn">Подробнее</UiButton>
    </div>
  </UiCard>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'
import { priceUnitLabel as unitLabel } from '~/data/products'

const props = defineProps<{ product: Product }>()

const paramsLine = computed(() => {
  if (props.product.sizeVariants?.length) {
    const heights = [...new Set(props.product.sizeVariants.map((item) => item.heightMm))]
    return `Линейка размеров • толщина ${heights.join('/')} мм`
  }

  if (props.product.lengthMm && props.product.widthMm && props.product.heightMm) {
    return `${props.product.lengthMm}×${props.product.widthMm}×${props.product.heightMm} мм`
  }

  return 'Характеристики уточняйте у менеджера'
})
</script>

<style scoped>
.product-card { padding: 0; overflow: hidden; display: flex; flex-direction: column; }
.product-media { display: block; aspect-ratio: 4 / 3; background: linear-gradient(140deg, #ddd 0%, #f6f6f6 45%, #d7d7d7 100%); }
.product-media img { width: 100%; height: 100%; object-fit: cover; }
.fallback { width: 100%; height: 100%; display: grid; place-items: center; color: var(--alpha-muted); font-weight: 700; letter-spacing: .06em; }
.card-body { padding: 18px; display: grid; gap: 10px; }
.type { margin: 0; color: var(--alpha-red); font-size: .85rem; font-weight: 700; text-transform: uppercase; }
h3 { margin: 0; font-size: 1.2rem; color: var(--alpha-dark); }
.price { margin: 0; font-weight: 700; }
.params { margin: 0; color: var(--alpha-muted); font-size: .92rem; min-height: 2.8em; }
.tags { display: flex; flex-wrap: wrap; gap: 8px; }
.details-btn { margin-top: 4px; width: fit-content; }
</style>
