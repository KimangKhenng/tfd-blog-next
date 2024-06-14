// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts"
  ],
  googleFonts: {
    families: {
      'Source Sans Pro': true,
      Kantumruy: true

    }
  }
})