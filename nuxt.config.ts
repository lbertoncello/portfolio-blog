// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  // To make Color Mode compatible with TailWind
  colorMode: {
    classSuffix: '',
  },
})
