// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark',
      },
    },
  },
  // To make Color Mode compatible with TailWind
  colorMode: {
    classSuffix: '',
  },
})
