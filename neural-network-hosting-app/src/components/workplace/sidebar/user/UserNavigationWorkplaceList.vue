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
    <div :class="$s.container">
      <UserNavigationWorkplaceListItem v-for="item in items" :key="item.id" :item="item" />
    </div>
  </ul>
</template>

<style lang="scss" module="$s">
.list {
  width: 100%;
  height: 150%;

  display: flex;
  flex-direction: column;
  gap: 5px;

  position: absolute;
  bottom: 0;
  left: calc(100% + 10px);

  background-color: $component-background-color;
  box-shadow: -2px 0px 8px rgba($box-shadow-color, 0.75);
  border-radius: $border-radius;

  z-index: 100;

  cursor: default;
}

.container {

  overflow-y: auto;

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
