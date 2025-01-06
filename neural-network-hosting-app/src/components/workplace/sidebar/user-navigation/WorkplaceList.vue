<script setup lang="ts">
import type { IWorkplace } from '@/api/user-service-api/interfaces/workplace.interface'

import WorkplaceListItem from './WorkplaceListItem.vue'

interface Props {
  items: IWorkplace[]
}

defineProps<Props>()
</script>

<template>
  <ul :class="$s['workplace-list']">
    <div :class="$s['workplace-list__body']">
      <WorkplaceListItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </ul>
</template>

<style lang="scss" module="$s">
.workplace-list {
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 5px;

  background-color: $component-background-color;
  box-shadow: -2px 0px 8px rgba($box-shadow-color, 0.75);
  border-radius: $border-radius;

  z-index: 100;

  cursor: default;
}

.workplace-list__body {
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: rgba($stroke-color, 0.25);
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba($stroke-color, 0.5);
    border-radius: $border-radius;
  }
}
</style>
