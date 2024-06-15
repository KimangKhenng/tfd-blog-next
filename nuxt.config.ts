// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    '@vee-validate/nuxt',
  ],
  googleFonts: {
    display: "swap",
    families: {
      Inter: true,
      Kantumruy: true,
      'LXGW WenKai Mono TC': true

    },
    subsets: ["latin", "khmer"],
  },
  // i18n: {
  //   detectBrowserLanguage: false,
  //   locales: [
  //     {
  //       code: "en",
  //       iso: "en-US",
  //       file: "en-US.js",
  //       dir: "ltr",
  //       moment: "en",
  //     },
  //     {
  //       code: "km",
  //       iso: "kh-KH",
  //       file: "kh-KH.js",
  //       dir: "ltr",
  //       moment: "km",
  //     },
  //   ],
  //   defaultLocale: "km",
  //   lazy: true,
  //   langDir: "./",
  //   vueI18n: './i18n.config.ts',
  // },
})