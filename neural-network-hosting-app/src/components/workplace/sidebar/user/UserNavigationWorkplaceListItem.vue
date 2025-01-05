<script setup lang="ts">
import type { IWorkplace } from '@/interfaces/shared/workplace.interface'

import { useAppStore } from '@/stores/app.store'

interface Props {
  item: IWorkplace
}

defineProps<Props>()

const appStore = useAppStore()
</script>

<template>
  <li :class="[$s.item, item.id === appStore.workplaceses.current?.id ? $s['item--active'] : '']">
    {{ item.title }}
  </li>
</template>

<style lang="scss" module="$s">
.item {
  padding: 7px 10px;

  transition: all 0.2s ease;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: $border-radius;
    border-top-right-radius: $border-radius;
  }

  &:nth-child(n + 4):last-child {
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
  }

  &:nth-child(n + 5):last-child {
    border-bottom-right-radius: 0;
  }

  &--active {
    cursor: default;
  }

  &--active,
  &:hover {
    color: $primary-color;
    background-color: $secondary-color;
  }

  &:not(.item--active):active {
    background-color: rgba($primary-color, 0.4);
  }
}
</style>
