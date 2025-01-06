<script setup lang="ts">
import type { INavigationItem } from '@/interfaces/navigation-item.interface'

import NavigationListItem from './NavigationListItem.vue'

interface Props {
  items: INavigationItem[]
}

defineProps<Props>()
</script>

<template>
  <nav :class="$s['navigation-list']">
    <NavigationListItem v-for="(item, index) in items" :key="index" :item="item" />
  </nav>
</template>

<style lang="scss" module="$s">
.navigation-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
