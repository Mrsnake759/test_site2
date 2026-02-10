<template>
  <UiSection id="lead" tone="muted">
    <div class="section-divider" />
    <UiCard class="lead-box">
      <div>
        <span class="section-tag">Обратная связь</span>
        <h2>Запросить прайс и консультацию</h2>
        <p>Подберём решение под задачу и бюджет. Дадим рекомендации по формату, поверхности и комплектующим.</p>
      </div>

      <form class="form" @submit.prevent="submit">
        <input v-model.trim="form.name" type="text" placeholder="Имя" required>
        <input v-model.trim="form.contact" type="text" placeholder="Телефон/Email" required>
        <textarea v-model.trim="form.comment" rows="4" placeholder="Комментарий" />
        <UiButton type="submit" variant="primary">Отправить</UiButton>
      </form>
    </UiCard>
  </UiSection>
</template>

<script setup lang="ts">
const form = reactive({
  name: '',
  contact: '',
  comment: ''
})

const submit = () => {
  alert('Заявка отправлена (демо)')
  form.name = ''
  form.contact = ''
  form.comment = ''
}
</script>

<style scoped>
.lead-box{display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:start}
h2{margin:8px 0;color:var(--c-dark);font-size:clamp(1.5rem,2.8vw,2rem)}
p{margin:0;color:var(--c-muted)}
.form{display:grid;gap:10px}
input,textarea{width:100%;border:1px solid rgba(36,37,39,.2);background:#fff;border-radius:14px;padding:12px 14px;font:inherit;color:var(--c-text);transition:border-color .2s ease, box-shadow .2s ease}
input:focus,textarea:focus{outline:none;box-shadow:0 0 0 3px rgba(181,23,0,.14);border-color:var(--c-accent)}
@media(max-width:900px){.lead-box{grid-template-columns:1fr}}
</style>
