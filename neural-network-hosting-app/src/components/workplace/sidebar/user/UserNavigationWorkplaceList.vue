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
    <UserNavigationWorkplaceListItem v-for="item in items" :key="item.id" :item="item" />
  </ul>
</template>

<style lang="scss" module="$s">
.list {
  max-height: 100%;

  overflow-y: scroll;

  cursor: default;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba($stroke-color, 0.25);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba($stroke-color, 0.5);
    border-radius: 5px;
  }
}
</style>
