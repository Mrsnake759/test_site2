<template>
  <UiSection>
    <nav class="breadcrumbs">
      <NuxtLink to="/">Главная</NuxtLink>
      <span>/</span>
      <NuxtLink to="/catalog">Каталог</NuxtLink>
      <span>/</span>
      <span>{{ product.name }}</span>
    </nav>

    <div class="hero">
      <div class="media">
        <img v-if="product.heroImage" :src="product.heroImage" :alt="product.name" />
        <div v-else class="fallback">ALPHA</div>
      </div>

      <UiCard class="hero-info">
        <p class="type">{{ product.typeLabel }}</p>
        <h1>{{ product.name }}</h1>
        <p class="desc">{{ product.description }}</p>
        <p class="price">от {{ product.priceFrom }} ₽ / {{ unitLabel[product.priceUnit] }}</p>
        <div class="actions">
          <UiButton to="/contacts#form" variant="primary">Запросить цену</UiButton>
          <UiButton to="/catalog" variant="secondary">В каталог</UiButton>
        </div>
      </UiCard>
    </div>
  </UiSection>

  <UiSection tone="muted">
    <div class="stack">
      <ProductSpecsTable :product="product" />
      <ProductColorPalette :product="product" />

      <UiCard>
        <h2>Где применяется</h2>
        <p class="desc">{{ product.description }}</p>
        <ul>
          <li>Для частных и общественных зон мощения.</li>
          <li>Для проектов с требованием к долговечности и стабильной геометрии.</li>
          <li>Для комплексных поставок с сопровождением и логистикой.</li>
        </ul>
      </UiCard>

      <UiCard class="calc-card" id="form">
        <h2>Запросить расчёт</h2>
        <form class="calc-form" @submit.prevent="submitForm">
          <label>
            Имя *
            <input v-model="form.name" type="text" required />
          </label>
          <label>
            Телефон *
            <input v-model="form.phone" type="tel" required />
          </label>
          <UiButton type="submit" variant="primary">Отправить</UiButton>
        </form>
      </UiCard>

      <ProductRelatedProducts :products="relatedProducts" />
    </div>
  </UiSection>
</template>

<script setup lang="ts">
import { priceUnitLabel as unitLabel, products } from '~/data/products'

const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const product = computed(() => products.find((item) => item.slug === slug.value))

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Товар не найден' })
}

const relatedProducts = computed(() =>
  products.filter((item) => item.category === product.value?.category && item.slug !== product.value?.slug).slice(0, 3)
)

useSeoMeta({
  title: () => `${product.value?.name ?? 'Товар'} — Альфа`,
  description: () => `${product.value?.description ?? ''} Цена и характеристики продукции Альфа.`,
  ogTitle: () => `${product.value?.name ?? 'Товар'} — Альфа`,
  ogDescription: () => product.value?.description ?? ''
})

const form = reactive({
  name: '',
  phone: ''
})

const submitForm = () => {
  if (!form.name.trim() || !form.phone.trim()) {
    alert('Пожалуйста, заполните обязательные поля.')
    return
  }

  // TODO: CRM integration
  console.log('catalog-calc-request', { ...form, product: product.value?.slug })
  alert('Спасибо, мы свяжемся с вами.')
  form.name = ''
  form.phone = ''
}
</script>

<style scoped>
.breadcrumbs { display: flex; flex-wrap: wrap; gap: 8px; color: var(--alpha-muted); margin-bottom: 18px; }
.breadcrumbs a { color: var(--alpha-dark); }
.hero { display: grid; grid-template-columns: 1.15fr 1fr; gap: 20px; }
.media { border-radius: 22px; overflow: hidden; min-height: 320px; background: linear-gradient(130deg, #d8d8d8 0%, #f4f4f4 44%, #d2d2d2 100%); }
.media img { width: 100%; height: 100%; object-fit: cover; }
.fallback { width: 100%; height: 100%; display: grid; place-items: center; font-size: 2rem; letter-spacing: .08em; color: rgba(36,37,39,.35); }
.hero-info { align-content: start; }
.type { margin: 0; text-transform: uppercase; color: var(--alpha-red); font-weight: 700; font-size: .85rem; }
h1 { margin: 6px 0 10px; color: var(--alpha-dark); }
.desc { margin: 0; color: var(--alpha-muted); }
.price { margin: 14px 0 0; font-weight: 700; color: var(--alpha-dark); }
.actions { margin-top: 16px; display: flex; gap: 10px; flex-wrap: wrap; }
.stack { display: grid; gap: 18px; }
ul { margin: 10px 0 0; padding-left: 20px; display: grid; gap: 8px; }
.calc-card h2 { margin: 0 0 12px; }
.calc-form { display: grid; gap: 12px; max-width: 560px; }
.calc-form label { display: grid; gap: 6px; color: var(--alpha-muted); font-size: .92rem; }
.calc-form input { border: 1px solid var(--alpha-line); border-radius: 10px; padding: 10px 12px; }

@media (max-width: 980px) {
  .hero { grid-template-columns: 1fr; }
  .media { min-height: 260px; }
}
@media (max-width: 640px) {
  .actions :deep(.ui-button) { width: 100%; }
}
</style>
