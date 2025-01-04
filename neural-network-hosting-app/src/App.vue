<script setup lang="ts">
import { onMounted } from 'vue';
import { useAppStore } from './stores/app.store';

const appStore = useAppStore()

onMounted(() => {
  appStore.init()
})
</script>

<template>
  <RouterView />
</template>

<style lang="scss" module="$s">

</style>
