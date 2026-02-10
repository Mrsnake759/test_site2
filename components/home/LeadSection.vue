<template>
  <UiSection id="lead">
    <div class="section-divider" />
    <UiCard class="lead-box">
      <div>
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
  alert('Заявка отправлена (заглушка). Позже подключим CRM.')
  form.name = ''
  form.contact = ''
  form.comment = ''
}
</script>

<style scoped>
.lead-box{display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:start}
h2{margin:0 0 8px;color:var(--c-dark);font-size:clamp(1.5rem,2.8vw,2rem)}
p{margin:0;color:var(--c-muted)}
.form{display:grid;gap:10px}
input,textarea{width:100%;border:1px solid rgba(36,37,39,.18);background:#fff;border-radius:14px;padding:12px 14px;font:inherit;color:var(--c-text)}
input:focus,textarea:focus{outline:2px solid rgba(181,23,0,.25);border-color:var(--c-accent)}
@media(max-width:900px){.lead-box{grid-template-columns:1fr}}
</style>
