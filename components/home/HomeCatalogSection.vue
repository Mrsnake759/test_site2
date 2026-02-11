<template>
  <UiSection>
    <span class="section-tag">Каталог</span>
    <h2>Каталог решений</h2>
    <p class="intro">Две основные категории для комплексного благоустройства территории.</p>
    <div class="cards">
      <article class="catalog-card" v-for="item in items" :key="item.title">
        <img :src="item.image" :alt="item.title">
        <div class="card-overlay" />
        <div class="content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.subtitle }}</p>
          <NuxtLink to="/catalog">В каталог →</NuxtLink>
        </div>
      </article>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
// TODO: replace /public/images/alpha/*.svg with curated Unsplash/Pexels JPG assets when network allows.

const items = [
  { title: 'ПЛИТКА И БРУСЧАТКА', subtitle: 'Коллекции для мощения', image: '/images/alpha/catalog-tiles.svg' },
  { title: 'БОРДЮРЫ И ОГРАЖДЕНИЯ', subtitle: 'Чёткая геометрия', image: '/images/alpha/catalog-curbs.svg' }
]
</script>

<style scoped>
h2{margin:8px 0 6px;font-size:clamp(1.7rem,3vw,2.4rem);color:var(--c-dark)}
.intro{margin:0 0 18px;color:var(--c-muted)}
.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.catalog-card{position:relative;min-height:300px;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-soft)}
.catalog-card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.card-overlay{position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%, rgba(36,37,39,.88) 100%)}
.content{position:absolute;left:0;right:0;bottom:0;padding:22px;color:#fff}
h3{margin:0 0 6px;font-size:1.1rem} p{margin:0 0 10px;color:rgba(255,255,255,.82)} a{font-weight:700}
@media(max-width:850px){.cards{grid-template-columns:1fr}}
</style>
