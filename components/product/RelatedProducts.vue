<template>
  <section class="related">
    <div class="head">
      <h2>Похожие товары</h2>
      <UiButton to="/catalog" variant="secondary">В каталог</UiButton>
    </div>
    <div class="grid">
      <CatalogProductCard v-for="item in products" :key="item.id" :product="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'

defineProps<{ products: Product[] }>()
</script>

<style scoped>
.related { display: grid; gap: 18px; }
.head { display: flex; justify-content: space-between; gap: 12px; align-items: center; }
.head h2 { margin: 0; }
.grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
@media (max-width: 1024px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 700px) { .grid { grid-template-columns: 1fr; } .head{flex-direction:column;align-items:flex-start;} }
</style>
