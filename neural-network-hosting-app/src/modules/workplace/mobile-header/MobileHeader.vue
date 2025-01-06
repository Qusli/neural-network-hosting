<script setup lang="ts">
import { Device } from '@/enums/device.enum'

import { device } from '@/utils/device'
</script>

<template>
  <header v-if="device === Device.TABLET || device === Device.PHONE"></header>
</template>
