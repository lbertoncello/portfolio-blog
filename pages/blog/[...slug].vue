<template>
  <article
    class="prose dark:prose-invert prose-pre:bg-gray-50 dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300 max-w-none"
  >
    <ContentDoc v-slot="{ doc }">
      <div class="grid grid-cols-6 gap-16">
        <div :class="{ 'col-span-4': doc.toc, 'col-span-6': !doc.toc }">
          <ContentRenderer :value="doc" />
        </div>
        <div v-if="doc.toc" class="col-span-2 not-prose">
          <aside class="sticky top-8">
            <div class="font-semibold mb-2">Table of Contents</div>
            <nav>
              <TocLinks :links="doc.body?.toc?.links" :active-id="activedId" />
            </nav>
          </aside>
        </div>
      </div>
    </ContentDoc>
  </article>
</template>

<script setup>
const activedId = ref(null)

/*
 * This entire block is intended to keep track of the current selected section
 * and mark it as active on the Table of Contents.
 */
onMounted(() => {
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activedId.value = entry.target.id
        break
      }
    }
  }
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  })
  const elements = document.querySelectorAll('h2, h3')
  // Set the selected elements to be all observed
  elements.forEach((element) => observer.observe(element))

  // Unbsorve all elements before changing the current page
  onBeforeUnmount(() => {
    elements.forEach((element) => observer.unobserve(element))
  })
})
</script>
