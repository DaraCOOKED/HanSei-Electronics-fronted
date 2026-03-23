export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4'
        }
      ]
    }
  },

  css: [
    '@fortawesome/fontawesome-free/css/all.min.css'
  ],

  modules: ['@nuxt/fonts']
})