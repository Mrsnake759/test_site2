<template>
  <UiSection tone="accent">
    <div class="hero-card">
      <img :src="slides[current].image" :alt="slides[current].title" class="hero-image">
      <div class="overlay" />
      <div class="grain" />

      <div class="hero-content">
        <p class="kicker"><span class="dot" /> АЛЬФА. ПРЕМИУМ</p>
        <h1>Премиальное мощение</h1>
        <p class="subtitle">Решения для частных и городских проектов</p>
        <div class="hero-actions">
          <UiButton to="/#contact-actions" variant="primary">Запросить консультацию</UiButton>
          <UiButton to="/catalog" variant="ghost" class="hero-secondary">В каталог</UiButton>
        </div>
      </div>

      <div class="hero-controls">
        <button @click="prev" aria-label="Предыдущий слайд">‹</button>
        <button @click="next" aria-label="Следующий слайд">›</button>
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
// TODO: replace /public/images/alpha/*.svg with curated Unsplash/Pexels JPG assets when network allows.

const slides = [
  { image: '/images/alpha/hero-1.svg', title: 'Садовая дорожка и мощение' },
  { image: '/images/texture1.svg', title: 'Фактура премиальной плитки' },
  { image: '/images/texture2.svg', title: 'Городская среда и благоустройство' }
]
const current = ref(0)
const next = () => { current.value = (current.value + 1) % slides.length }
const prev = () => { current.value = (current.value - 1 + slides.length) % slides.length }
</script>

<style scoped>
.hero-card{position:relative;min-height:560px;border-radius:30px;overflow:hidden;box-shadow:var(--shadow-lift)}
.hero-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.overlay{position:absolute;inset:0;background:linear-gradient(92deg,rgba(36,37,39,.12) 5%, rgba(36,37,39,.58) 56%, rgba(36,37,39,.86) 100%)}
.grain{position:absolute;inset:0;opacity:.18;background-image:linear-gradient(0deg, rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);background-size:3px 3px;mix-blend-mode:soft-light}
.hero-content{position:relative;z-index:1;max-width:470px;margin-left:auto;padding:72px 52px;color:#fff}
.kicker{margin:0;font-size:.82rem;letter-spacing:.14em;color:#ffddd6;font-weight:700;display:inline-flex;align-items:center;gap:8px}
.dot{width:8px;height:8px;border-radius:50%;background:var(--alpha-red);display:inline-block;box-shadow:0 0 0 6px rgba(181,23,0,.2)}
h1{margin:12px 0 12px;font-size:clamp(2.2rem,4.2vw,3.7rem);line-height:1.03;color:#fff}
.subtitle{margin:0;color:rgba(255,255,255,.74);font-size:1.03rem}
.hero-actions{margin-top:26px;display:flex;gap:12px;flex-wrap:wrap}
.hero-secondary{color:#fff !important;border-color:rgba(255,255,255,.75) !important;background:rgba(255,255,255,.12) !important;backdrop-filter: blur(4px)}
.hero-secondary:hover{background:rgba(255,255,255,.2) !important}
.hero-controls{position:absolute;z-index:2;left:24px;bottom:24px;display:flex;gap:8px}
.hero-controls button{width:42px;height:42px;border-radius:50%;border:1px solid rgba(255,255,255,.45);background:rgba(36,37,39,.45);color:#fff;font-size:1.2rem;cursor:pointer;transition:all .22s ease}
.hero-controls button:hover{background:rgba(181,23,0,.9);border-color:rgba(255,255,255,.9)}
.hero-controls button:focus-visible{outline:3px solid rgba(181,23,0,.35);outline-offset:2px}
@media(max-width:900px){
  .hero-card{min-height:560px;border-radius:24px}
  .overlay{background:linear-gradient(180deg,rgba(36,37,39,.24) 14%, rgba(36,37,39,.7) 64%, rgba(36,37,39,.9) 100%)}
  .hero-content{max-width:none;margin-left:0;padding:34px 20px 110px}
  .hero-actions{flex-direction:column;align-items:stretch}
}
</style>
