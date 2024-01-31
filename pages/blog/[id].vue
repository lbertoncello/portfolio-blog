<template>
  <div>
    <div>We are inside a blog!</div>
    <div>The post id is "{{ route.params.id }}"</div>
  </div>
</template>

<script setup>
const route = useRoute()
</script>
