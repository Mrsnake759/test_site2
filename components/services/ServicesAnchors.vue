<template>
  <div class="anchors-wrap">
    <UiContainer>
      <nav class="anchors" aria-label="Навигация по услугам">
        <a v-for="item in items" :key="item.id" :href="`#${item.id}`">{{ item.label }}</a>
      </nav>
    </UiContainer>
  </div>
</template>

<script setup lang="ts">
const items = [
  { id: 'consulting', label: 'Подбор решений' },
  { id: 'b2b', label: 'Проектные поставки' },
  { id: 'calc', label: 'Расчёт объёмов' },
  { id: 'logistics', label: 'Логистика' },
  { id: 'support', label: 'Сопровождение' }
]
</script>

<style scoped>
.anchors-wrap{position:sticky;top:124px;z-index:12;padding:8px 0 0}
.anchors{display:flex;gap:10px;overflow:auto;padding-bottom:6px}
.anchors a{white-space:nowrap;padding:8px 12px;border-radius:999px;border:1px solid rgba(36,37,39,.14);background:#fff;color:var(--c-dark);font-size:.86rem;font-weight:600;transition:all .2s ease}
.anchors a:hover{border-color:var(--alpha-red);color:var(--alpha-red);transform:translateY(-1px)}
@media(max-width:1024px){.anchors-wrap{top:66px}}
</style>
