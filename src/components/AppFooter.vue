<template>
  <footer class="footer">
    <AppContainer>
      <div class="footer__inner">
        <div>
          <p class="footer__title">Открыт к сотрудничеству</p>
          <p class="footer__summary">Проекты в сфере продукта, фронтенда и цифровой трансформации.</p>
        </div>
        <div class="footer__links" aria-label="Социальные сети">
          <a v-for="link in socials" :key="link.href" class="footer__link" :href="link.href" target="_blank" rel="noopener">
            <Icon :name="link.icon" />
            <span>{{ link.label }}</span>
          </a>
        </div>
      </div>
      <div class="footer__bottom">
        <p>© {{ new Date().getFullYear() }} Artem Sadomtsev. Сделано с вниманием к деталям.</p>
      </div>
    </AppContainer>
  </footer>
</template>

<script setup lang="ts">
import AppContainer from './AppContainer.vue';
import Icon from './Ui/Icon.vue';
import profile from '@content/profile.json';

const socials = [
  { href: `mailto:${profile.contacts.email}`, label: 'Email', icon: 'mail' },
  { href: profile.contacts.telegram, label: 'Telegram', icon: 'send' },
  { href: profile.contacts.linkedin, label: 'LinkedIn', icon: 'linkedin' }
];
</script>

<style scoped>
.footer {
  margin-top: 6rem;
  padding: 3rem 0 2rem;
  background: var(--surface-elevated);
  border-top: 1px solid var(--border-subtle);
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer__title {
  font-weight: 600;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.footer__summary {
  color: var(--text-secondary);
  max-width: 360px;
}

.footer__links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.footer__link {
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 0.75rem;
  background: color-mix(in srgb, var(--accent-primary) 12%, transparent);
  color: var(--text-primary);
  transition: background 0.2s ease, transform 0.2s ease;
}

.footer__link:hover,
.footer__link:focus-visible {
  background: color-mix(in srgb, var(--accent-primary) 18%, transparent);
  transform: translateY(-1px);
}

.footer__bottom {
  margin-top: 2.5rem;
  text-align: center;
  color: var(--text-tertiary);
  font-size: 0.875rem;
}
</style>
