<template>
  <footer class="app-footer">
    <UiContainer class="footer-inner">
      <p>© {{ new Date().getFullYear() }} Альфа. Премиальные решения мощения.</p>
      <NuxtLink to="/contacts">Контакты</NuxtLink>
    </UiContainer>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid rgba(36, 37, 39, 0.12);
  padding: 28px 0 36px;
  margin-top: 24px;
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  color: var(--c-muted);
  font-size: 0.9rem;
}

.footer-inner p {
  margin: 0;
}

@media (max-width: 640px) {
  .footer-inner {
    flex-direction: column;
  }
}
</style>
