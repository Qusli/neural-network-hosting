<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { INavigationItem } from '@/interfaces/navigation-item.interface'

import SharedInlineIcon from '@/components/shared/SharedInlineIcon.vue'

interface Props {
  item: INavigationItem
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="item.path" :class="$s['navigation-list__item']">
    <SharedInlineIcon :name="item.icon" />
    <p :class="$s['item__label']">{{ item.label }}</p>
  </RouterLink>
</template>

<style lang="scss" module="$s">
.navigation-list__item {
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 5px 10px;
  border-radius: $border-radius;
}

.navigation-list__item,
.item__label {
  transition: all $transition-time $transition-function;
}

.navigation-list__item:global(.router-link-active),
.navigation-list__item:not(:global(.router-link-active)):hover {
  background-color: $secondary-color;

  .item__label {
    color: $primary-color;
  }

  :global(path) {
    fill: $primary-color;
  }
}

.navigation-list__item:global(.router-link-active) {
  cursor: default;
}
</style>
