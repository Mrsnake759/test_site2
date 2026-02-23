<template>
  <UiCard>
    <h2>Характеристики</h2>
    <dl class="spec-grid">
      <template v-if="product.sizeVariants?.length">
        <dt>Линейка размеров</dt>
        <dd>
          <span v-for="(size, idx) in product.sizeVariants" :key="idx">
            {{ size.lengthMm }}×{{ size.widthMm }}×{{ size.heightMm }} мм
          </span>
        </dd>
      </template>
      <template v-else>
        <dt>Размер</dt>
        <dd>{{ product.lengthMm }}×{{ product.widthMm }}×{{ product.heightMm }} мм</dd>
      </template>

      <dt>Группа эксплуатации</dt>
      <dd>{{ product.exploitationGroup ?? '—' }}</dd>

      <dt>Прочность на сжатие</dt>
      <dd>{{ product.compressClass ?? '—' }}</dd>

      <dt>Прочность на растяжение</dt>
      <dd>{{ product.tensileClass ?? '—' }}</dd>

      <dt>Истираемость</dt>
      <dd>{{ product.abrasionMark ?? '—' }}</dd>

      <dt>Морозостойкость</dt>
      <dd>{{ product.frostMark ?? '—' }}</dd>
    </dl>
  </UiCard>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'

defineProps<{ product: Product }>()
</script>

<style scoped>
h2 { margin: 0 0 12px; color: var(--alpha-dark); }
.spec-grid { display: grid; grid-template-columns: minmax(180px, 260px) 1fr; gap: 10px 20px; margin: 0; }
dt { color: var(--alpha-muted); }
dd { margin: 0; font-weight: 600; color: var(--alpha-dark); display: grid; gap: 4px; }
@media (max-width: 768px) { .spec-grid { grid-template-columns: 1fr; gap: 6px; } }
</style>
