<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center mt-5">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">
          Lucas Bertoncello
        </NuxtLink>
      </div>
      <NavbarMenu />
    </header>
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: '%s - Lucas Bertoncello',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: '',
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})

useSeoMeta({
  twitterCard: 'summary',
})
</script>

<style>
body {
  font-family: 'Roboto';
}
</style>
