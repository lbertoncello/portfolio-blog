<template>
  <section class="not-prose">
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-lists', () =>
  queryContent('/blog')
    .only(['title', '_path'])
    .where({ _path: { $ne: '/blog' } })
    .find()
)
</script>
