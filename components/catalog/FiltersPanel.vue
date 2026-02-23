<template>
  <aside class="filters">
    <div class="head">
      <h2>Фильтры</h2>
      <button type="button" class="reset" @click="$emit('reset')">Сбросить</button>
    </div>

    <div class="group">
      <p>Категория</p>
      <label><input type="radio" value="all" v-model="localState.category" /> Все</label>
      <label><input type="radio" value="plitka-bruschatka" v-model="localState.category" /> Плитка и брусчатка</label>
      <label><input type="radio" value="bordyury-ograzhdeniya" v-model="localState.category" /> Бордюры и ограждения</label>
    </div>

    <div class="group">
      <p>Группа эксплуатации</p>
      <label><input type="checkbox" value="A" v-model="localState.groups" /> A</label>
      <label><input type="checkbox" value="B" v-model="localState.groups" /> B</label>
    </div>

    <div class="group">
      <p>Толщина, мм</p>
      <label v-for="height in availableThicknesses" :key="height">
        <input type="checkbox" :value="height" v-model="localState.thicknesses" /> {{ height }}
      </label>
    </div>

    <div class="group">
      <p>Технология поверхности</p>
      <label><input type="checkbox" value="gladkaya" v-model="localState.tech" /> Гладкая</label>
      <label><input type="checkbox" value="colormix" v-model="localState.tech" /> Колормикс</label>
      <label><input type="checkbox" value="otmyv" v-model="localState.tech" /> Отмыв</label>
    </div>

    <div class="group">
      <p>Цвет</p>
      <div class="swatches">
        <label v-for="item in availableColors" :key="item.name" class="swatch-item">
          <input type="checkbox" :value="item.name" v-model="localState.colors" />
          <span class="swatch" :style="{ backgroundColor: item.hex }" />
          <span>{{ item.name }}</span>
        </label>
      </div>
    </div>

    <div class="group price-range">
      <p>Диапазон цены, ₽</p>
      <div class="row">
        <input
          type="number"
          min="0"
          placeholder="От"
          :value="localState.priceFrom ?? ''"
          @input="setPrice('from', $event)"
        />
        <input
          type="number"
          min="0"
          placeholder="До"
          :value="localState.priceTo ?? ''"
          @input="setPrice('to', $event)"
        />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  localState: {
    category: string
    groups: string[]
    thicknesses: number[]
    tech: string[]
    colors: string[]
    priceFrom: number | null
    priceTo: number | null
  }
  availableThicknesses: number[]
  availableColors: Array<{ name: string; hex: string }>
}>()

const emit = defineEmits<{
  reset: []
  setPrice: [mode: 'from' | 'to', value: number | null]
}>()

const setPrice = (mode: 'from' | 'to', event: Event) => {
  const raw = (event.target as HTMLInputElement).value
  emit('setPrice', mode, raw ? Number(raw) : null)
}
</script>

<style scoped>
.filters {
  position: sticky;
  top: 120px;
  border: 1px solid var(--alpha-line);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow);
  padding: 18px;
  display: grid;
  gap: 16px;
}
.head { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
.head h2 { margin: 0; font-size: 1.05rem; }
.reset { border: 0; background: none; color: var(--alpha-red); font-weight: 600; cursor: pointer; }
.group { display: grid; gap: 8px; padding-top: 12px; border-top: 1px solid var(--alpha-line); }
.group p { margin: 0; font-size: .9rem; font-weight: 700; color: var(--alpha-dark); }
label { display: inline-flex; align-items: center; gap: 8px; color: var(--alpha-muted); font-size: .9rem; }
input[type='checkbox'], input[type='radio'] { accent-color: var(--alpha-red); }
.swatches { display: grid; gap: 8px; }
.swatch-item { display: grid; grid-template-columns: 16px 20px 1fr; align-items: center; gap: 8px; }
.swatch { width: 20px; height: 20px; border-radius: 6px; border: 1px solid rgba(36,37,39,.18); }
.row { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
.row input { width: 100%; border: 1px solid var(--alpha-line); border-radius: 10px; padding: 8px 10px; }

@media (max-width: 1024px) {
  .filters { position: static; }
}
</style>
