<script setup lang="ts">
import { Device } from '@/enums/device.enum'

import { useAppStore } from '@/stores/app.store'

const appStore = useAppStore()
</script>

<template>
  <header v-if="appStore.device === Device.TABLET || appStore.device === Device.PHONE"></header>
</template>

<style lang="scss" module="$s"></style>
