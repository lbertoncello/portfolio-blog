<template>
  <section>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { data: posts } = await useAsyncData('blog-lists', () =>
  queryContent('/blog').only(['title', '_path']).find()
)

// Meta data
useSeoMeta({
  title: 'Blog List',
  description: 'This is the list of all blog posts',
  ogTitle: 'Blog List',
  twitterTitle: 'Blog List',
})
</script>
