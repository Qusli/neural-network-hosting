<script setup lang="ts">
import type { IWorkplace } from '@/api/user-service-api/interfaces/workplace.interface'

import { useWorkplacesStore } from '@/stores/workplaces.store';

interface Props {
  item: IWorkplace
}

defineProps<Props>()

const workplacesStore = useWorkplacesStore()
</script>

<template>
  <li
    :class="[
      $s['workplace-list__item'],
      item.id === workplacesStore.workplaces.current?.id ? $s['workplace-list__item--active'] : '',
    ]"
    @click="workplacesStore.switchWorkplace(item)"
  >
    {{ item.title }}
  </li>
</template>

<style lang="scss" module="$s">
.workplace-list__item {
  padding: 7px 10px;

  transition: all $transition-time $transition-function;
  -webkit-transition: all $transition-time $transition-function;
  -o-transition: all $transition-time $transition-function;

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

  &:not(.workplace-list__item--active):active {
    background-color: rgba($primary-color, 0.4);
  }
}
</style>
