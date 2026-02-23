<template>
  <UiSection>
    <div class="page-subhero">
      <span class="section-tag">Продукция Альфа</span>
      <h1>Каталог</h1>
      <p>Плитка, брусчатка, бордюры и элементы мощения «Альфа».</p>
    </div>
  </UiSection>

  <UiSection tone="muted">
    <div class="catalog-layout">
      <CatalogFiltersPanel
        :local-state="state"
        :available-thicknesses="availableThicknesses"
        :available-colors="availableColors"
        @reset="resetFilters"
        @set-price="onSetPrice"
      />

      <div class="catalog-main">
        <div class="toolbar">
          <p>Найдено: {{ filteredProducts.length }}</p>
          <CatalogSortSelect v-model="state.sort" />
        </div>

        <div v-if="filteredProducts.length" class="products-grid">
          <CatalogProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>

        <UiCard v-else class="empty">
          <h2>Ничего не найдено</h2>
          <p>Попробуйте сбросить фильтры и задать новый диапазон параметров.</p>
          <UiButton variant="primary" @click="resetFilters">Сбросить</UiButton>
        </UiCard>
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const { state, availableThicknesses, availableColors, filteredProducts, resetFilters } = useCatalogFilters()

useSeoMeta({
  title: 'Каталог — Альфа',
  description: 'Каталог премиальных решений мощения: плитка, брусчатка, бордюры и элементы благоустройства Альфа.',
  ogTitle: 'Каталог — Альфа',
  ogDescription: 'Выберите формат, толщину, палитру и характеристики продукции Альфа.',
  ogType: 'website'
})

const onSetPrice = (mode: 'from' | 'to', value: number | null) => {
  if (mode === 'from') state.priceFrom = value
  if (mode === 'to') state.priceTo = value
}
</script>

<style scoped>
.catalog-layout { display: grid; grid-template-columns: 320px 1fr; gap: 22px; align-items: start; }
.toolbar { display: flex; justify-content: space-between; gap: 16px; align-items: center; margin-bottom: 16px; }
.toolbar p { margin: 0; color: var(--alpha-muted); font-weight: 600; }
.products-grid { display: grid; gap: 16px; grid-template-columns: repeat(3, minmax(0, 1fr)); }
.empty { display: grid; gap: 10px; justify-items: start; }
.empty h2, .empty p { margin: 0; }

@media (max-width: 1200px) {
  .catalog-layout { grid-template-columns: 280px 1fr; }
  .products-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 1024px) {
  .catalog-layout { grid-template-columns: 1fr; }
}

@media (max-width: 700px) {
  .toolbar { flex-direction: column; align-items: flex-start; }
  .products-grid { grid-template-columns: 1fr; }
}
</style>
