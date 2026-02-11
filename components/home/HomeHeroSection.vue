<template>
  <UiSection tone="accent">
    <div class="hero-card">
      <img :src="slides[current].image" :alt="slides[current].title" class="hero-image">
      <div class="overlay" />

      <div class="hero-content">
        <p class="kicker">АЛЬФА. ПРЕМИУМ</p>
        <h1>Премиальное мощение</h1>
        <p class="subtitle">Решения для частных и городских проектов</p>
        <div class="hero-actions">
          <UiButton to="/#contact-actions" variant="primary">Запросить консультацию</UiButton>
          <UiButton to="/catalog" variant="ghost">В каталог</UiButton>
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
const slides = [
  { image: '/images/hero.svg', title: 'Садовая дорожка и мощение' },
  { image: '/images/texture1.svg', title: 'Фактура премиальной плитки' },
  { image: '/images/texture2.svg', title: 'Городская среда и благоустройство' }
]
const current = ref(0)
const next = () => { current.value = (current.value + 1) % slides.length }
const prev = () => { current.value = (current.value - 1 + slides.length) % slides.length }
</script>

<style scoped>
.hero-card{position:relative;min-height:500px;border-radius:var(--radius-lg);overflow:hidden;box-shadow:var(--shadow-lift)}
.hero-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(36,37,39,.12) 10%, rgba(36,37,39,.72) 65%, rgba(36,37,39,.86) 100%)}
.hero-content{position:relative;z-index:1;max-width:440px;margin-left:auto;padding:56px 46px;color:#fff}
.kicker{font-size:.82rem;letter-spacing:.12em;color:#ffd4cc;font-weight:700}
h1{margin:8px 0 12px;font-size:clamp(2.1rem,4vw,3.3rem);line-height:1.05}
.subtitle{margin:0;color:rgba(255,255,255,.85)}
.hero-actions{margin-top:22px;display:flex;gap:10px;flex-wrap:wrap}
.hero-controls{position:absolute;z-index:2;left:22px;bottom:22px;display:flex;gap:8px}
.hero-controls button{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.5);background:rgba(36,37,39,.5);color:#fff;cursor:pointer}
.hero-controls button:hover{background:rgba(181,23,0,.85)}
@media(max-width:900px){.hero-card{min-height:460px}.hero-content{max-width:none;margin-left:0;padding:42px 24px 84px}}
</style>
