export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  devtools: { enabled: false },
  css: ['~/assets/styles/main.css'],
  app: {
    head: {
      titleTemplate: '%s | Альфа',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#242527' }
      ]
    }
  },
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/about', '/catalog', '/services', '/delivery', '/contacts']
    }
  },
  routeRules: {
    '/**': { prerender: true }
  },
  typescript: {
    strict: true,
    typeCheck: false
  }
})
