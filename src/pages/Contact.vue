<template>
  <SeoHead
    title="Контакты — Artem Sadomtsev"
    description="Связаться с Артемом Садомцевым: email, Telegram, LinkedIn и форма обратной связи."
  />
  <section class="contact">
    <AppContainer>
      <div class="contact__header reveal" ref="headerRef">
        <h1 class="section-title">Давайте обсуждать проекты</h1>
        <p class="section-subtitle">Открыт к консалтингу, запуску новых продуктов и развитию существующих.</p>
      </div>
      <div class="contact__grid">
        <aside class="contact__info reveal" ref="infoRef">
          <h2>Быстрые способы связи</h2>
          <div class="contact__links">
            <a :href="`mailto:${profile.contacts.email}`" class="contact__link">
              <Icon name="mail" />
              <span>{{ profile.contacts.email }}</span>
            </a>
            <a :href="profile.contacts.telegram" target="_blank" rel="noopener" class="contact__link">
              <Icon name="send" />
              <span>Написать в Telegram</span>
            </a>
            <a :href="profile.contacts.linkedin" target="_blank" rel="noopener" class="contact__link">
              <Icon name="linkedin" />
              <span>Профиль в LinkedIn</span>
            </a>
            <a :href="profile.contacts.cvUrl" download class="contact__link">
              <Icon name="download" />
              <span>Скачать CV</span>
            </a>
          </div>
          <p class="contact__note">Отвечаю в течение 1–2 рабочих дней. Укажите контекст и целевые метрики, чтобы стартовать быстрее.</p>
        </aside>
        <form class="contact__form reveal" ref="formRef" novalidate @submit.prevent="onSubmit">
          <div class="form__field" :class="{ 'has-error': errors.name }">
            <label for="name">Имя</label>
            <input id="name" v-model="form.name" type="text" name="name" autocomplete="name" required />
            <p v-if="errors.name" class="form__error">{{ errors.name }}</p>
          </div>
          <div class="form__field" :class="{ 'has-error': errors.email }">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" name="email" autocomplete="email" required />
            <p v-if="errors.email" class="form__error">{{ errors.email }}</p>
          </div>
          <div class="form__field" :class="{ 'has-error': errors.message }">
            <label for="message">Сообщение</label>
            <textarea id="message" v-model="form.message" rows="5" name="message" required></textarea>
            <p v-if="errors.message" class="form__error">{{ errors.message }}</p>
          </div>
          <button class="btn btn--primary" type="submit">Отправить</button>
          <p v-if="submitted" class="form__success">Спасибо! Сообщение не отправлено автоматически, но все поля заполнены корректно.</p>
          <p class="form__hint">
            <!-- Для интеграции с Formspree раскомментируйте action и метод ниже -->
            <!-- <form action="https://formspree.io/f/{form_id}" method="POST"> -->
            <!--   <input type="email" name="email" /> -->
            <!--   <button type="submit">Send</button> -->
            <!-- </form> -->
            Для отправки через Formspree или Netlify Forms добавьте соответствующий action и атрибуты в шаблон.
          </p>
        </form>
      </div>
    </AppContainer>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import SeoHead from '@/components/SeoHead.vue';
import AppContainer from '@/components/AppContainer.vue';
import Icon from '@/components/Ui/Icon.vue';
import profile from '@content/profile.json';
import { useReveal } from '@/utils/intersection';

const headerRef = ref<HTMLElement | null>(null);
const infoRef = ref<HTMLElement | null>(null);
const formRef = ref<HTMLElement | null>(null);

useReveal(headerRef);
useReveal(infoRef);
useReveal(formRef);

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const errors = reactive<{ name?: string; email?: string; message?: string }>({});
const submitted = ref(false);

const onSubmit = () => {
  submitted.value = false;
  errors.name = form.name.trim() ? undefined : 'Укажите имя';
  errors.email = /.+@.+\..+/.test(form.email) ? undefined : 'Введите корректный email';
  errors.message = form.message.trim().length >= 10 ? undefined : 'Расскажите о задаче подробнее (мин. 10 символов)';

  if (!errors.name && !errors.email && !errors.message) {
    submitted.value = true;
  }
};
</script>

<style scoped>
.contact__grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(2rem, 4vw, 3rem);
  margin-top: 3rem;
}

.contact__info {
  grid-column: span 5;
  background: var(--surface-elevated);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.contact__links {
  display: grid;
  gap: 0.75rem;
}

.contact__link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  transition: border 0.2s ease, transform 0.2s ease;
}

.contact__link:hover,
.contact__link:focus-visible {
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

.contact__note {
  margin: 0;
  color: var(--text-secondary);
}

.contact__form {
  grid-column: span 7;
  background: var(--surface-contrast);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  padding: clamp(2rem, 3vw, 2.5rem);
  display: grid;
  gap: 1.25rem;
}

.form__field {
  display: grid;
  gap: 0.5rem;
}

.form__field label {
  font-weight: 600;
}

.form__field input,
.form__field textarea {
  padding: 0.75rem 1rem;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-subtle);
  background: var(--surface-primary);
  color: var(--text-primary);
}

.form__field textarea {
  resize: vertical;
}

.form__field.has-error input,
.form__field.has-error textarea {
  border-color: #f97316;
}

.form__error {
  margin: 0;
  color: #f97316;
  font-size: 0.85rem;
}

.form__success {
  margin: 0;
  color: var(--accent-primary);
  font-weight: 600;
}

.form__hint {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-tertiary);
}

@media (max-width: 960px) {
  .contact__grid {
    grid-template-columns: 1fr;
  }

  .contact__info,
  .contact__form {
    grid-column: span 12;
  }
}
</style>
