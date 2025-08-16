// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  
  // Add this route rule to ignore API.php requests
  routeRules: {
    '/api.php': { ssr: false, prerender: false }
  },
  
  // Optional: Nitro proxy configuration for development
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
      }
    }
  }
})