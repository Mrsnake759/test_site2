<template>
  <label class="sort-select">
    <span>Сортировка:</span>
    <select :value="modelValue" @change="onChange">
      <option value="default">По умолчанию</option>
      <option value="price-asc">Цена: по возрастанию</option>
      <option value="price-desc">Цена: по убыванию</option>
      <option value="name">Название</option>
    </select>
  </label>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>()

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const onChange = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLSelectElement).value)
}
</script>

<style scoped>
.sort-select { display: inline-flex; align-items: center; gap: 10px; font-size: 0.92rem; color: var(--alpha-muted); }
select {
  border: 1px solid var(--alpha-line);
  border-radius: 12px;
  padding: 10px 12px;
  font: inherit;
  background: #fff;
  color: var(--alpha-dark);
}
</style>
