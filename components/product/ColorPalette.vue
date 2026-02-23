<template>
  <UiCard>
    <h2>Палитра цветов</h2>
    <div class="tabs">
      <button
        v-for="tech in techOptions"
        :key="tech.value"
        type="button"
        :class="['tab', { active: selectedTech === tech.value }]"
        @click="selectedTech = tech.value"
      >
        {{ tech.label }}
      </button>
    </div>

    <div class="swatches">
      <button
        v-for="color in activeColors"
        :key="`${color.tech}-${color.name}`"
        type="button"
        :class="['swatch-item', { active: selectedColor?.name === color.name }]"
        @click="selectedColor = color"
      >
        <span class="swatch" :style="{ background: color.hex || '#bbb' }" />
        <span>{{ color.name }}</span>
      </button>
    </div>

    <p v-if="selectedColor" class="note">{{ selectedColor.note }}</p>
  </UiCard>
</template>

<script setup lang="ts">
import type { Product, SurfaceTech } from '~/data/products'

const props = defineProps<{ product: Product }>()

const techOptions: Array<{ value: SurfaceTech; label: string }> = [
  { value: 'gladkaya', label: 'Гладкая' },
  { value: 'colormix', label: 'Колормикс' },
  { value: 'otmyv', label: 'Отмыв' }
]

const selectedTech = ref<SurfaceTech>('gladkaya')

const activeColors = computed(() => props.product.colors.filter((color) => color.tech === selectedTech.value))
const selectedColor = ref(activeColors.value[0])

watch(activeColors, (colors) => {
  selectedColor.value = colors[0]
})
</script>

<style scoped>
h2 { margin: 0 0 12px; color: var(--alpha-dark); }
.tabs { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 14px; }
.tab { border: 1px solid var(--alpha-line); background: #fff; border-radius: 999px; padding: 8px 14px; cursor: pointer; }
.tab.active { border-color: var(--alpha-red); color: var(--alpha-red); background: rgba(181, 23, 0, 0.06); }
.swatches { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; }
.swatch-item { border: 1px solid var(--alpha-line); background: #fff; border-radius: 12px; padding: 8px; display: flex; align-items: center; gap: 8px; cursor: pointer; }
.swatch-item.active { border-color: var(--alpha-red); box-shadow: 0 8px 20px rgba(181,23,0,.15); }
.swatch { width: 20px; height: 20px; border-radius: 6px; border: 1px solid rgba(36,37,39,.2); }
.note { margin: 12px 0 0; color: var(--alpha-muted); }
</style>
