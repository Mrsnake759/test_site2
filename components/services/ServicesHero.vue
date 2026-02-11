<template>
  <UiSection tone="accent">
    <div class="hero-card">
      <img src="/images/services/hero.svg" alt="Фактура покрытия" class="hero-image" @error="broken = true" v-if="!broken">
      <div class="placeholder-media" v-else>Services hero</div>
      <div class="overlay" />
      <div class="content">
        <span class="section-tag">Услуги</span>
        <h1>Услуги Альфа</h1>
        <p>
          Мы предлагаем не просто поставку изделий мощения, а комплексный подход к реализации проектов — от подбора решений до организации поставок. Работаем с частными, коммерческими и инфраструктурными объектами.
        </p>
        <div class="framed">мы не только производим, мы сопровождаем</div>
      </div>
    </div>
  </UiSection>
</template>

<script setup lang="ts">
const broken = ref(false)
</script>

<style scoped>
.hero-card{position:relative;overflow:hidden;border-radius:30px;min-height:460px;box-shadow:var(--shadow-lift)}
.hero-image{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.overlay{position:absolute;inset:0;background:linear-gradient(100deg,rgba(36,37,39,.18) 0%, rgba(36,37,39,.74) 68%, rgba(36,37,39,.88) 100%)}
.content{position:relative;z-index:1;margin-left:auto;max-width:600px;padding:52px 40px;color:#fff}
h1{margin:10px 0 12px;font-size:clamp(2rem,4vw,3.4rem);line-height:1.06}
p{margin:0;color:rgba(255,255,255,.84)}
.framed{margin-top:18px;display:inline-flex;padding:10px 14px;border:1px solid rgba(255,255,255,.48);border-radius:12px;background:rgba(255,255,255,.08);font-weight:600;text-transform:lowercase}
@media(max-width:900px){.hero-card{min-height:520px}.content{padding:34px 20px 28px;max-width:none}}
</style>
