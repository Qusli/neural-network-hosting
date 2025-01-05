<script setup lang="ts">
import type { IWorkplace } from '@/interfaces/shared/workplace.interface'

import UserNavigationWorkplaceListItem from './UserNavigationWorkplaceListItem.vue'

interface Props {
  items: IWorkplace[]
}

defineProps<Props>()
</script>

<template>
  <ul :class="$s.list">
    <UserNavigationWorkplaceListItem
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </ul>
</template>

<style lang="scss" module="$s">
.list {
  cursor: default;
}
</style>
