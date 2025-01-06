<script setup lang="ts">
import { onMounted } from 'vue'

import { useAppStore } from './stores/app.store'
import { onReisze } from './utils/on-resize'

const appStore = useAppStore()

onMounted(() => {
  // on resize event
  onReisze()

  appStore.init()
})
</script>

<template>
  <RouterView />
</template>
