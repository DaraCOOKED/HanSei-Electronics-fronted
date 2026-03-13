// nuxt.config.js or nuxt.config.ts
export default defineNuxtConfig({
  // or module.exports in Nuxt 2
  app: {
    head: {
      script: [
        // Example: Adding a CDN script for jQuery
        {
          src: 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
        }
      ],
    }
  },

  modules: [
    '@nuxt/icon',
    '@nuxt/fonts'
  ]
  
})