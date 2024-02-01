<template>
  <div class="flex space-x-2 items-center">
    <div v-if="showNextModelLabel" class="text-grey-500 text-xs">
      Change to {{ nextMode }}
    </div>
    <button
      class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500"
      @click="toggleMode"
      @mouseenter="showNextModelLabel = true"
      @mouseleave="showNextModelLabel = false"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>

<script setup>
const showNextModelLabel = ref(false)
const colorMode = useColorMode()

const modes = ['system', 'light', 'dark']
const nextModeIcons = {
  system: '🌓',
  light: '☀️',
  dark: '🌑',
}

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference)
  const nextModeIndex = (currentModeIndex + 1) % modes.length

  return modes[nextModeIndex]
})
const nextModeIcon = computed(() => nextModeIcons[nextMode.value])

const toggleMode = () => (colorMode.preference = nextMode.value)
</script>
