<script setup lang="ts">
import { RouterLink } from 'vue-router'

import type { INavigationItem } from '@/interfaces/dashboard/navigation-item.interface'

import SharedInlineIcon from '@/components/shared/SharedInlineIcon.vue'

interface Props {
  item: INavigationItem
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="item.path" :class="$s.link">
    <SharedInlineIcon :name="item.icon" />
    <p>{{ item.label }}</p>
  </RouterLink>
</template>

<style lang="scss" module="$s">
.link {
  display: flex;
  align-items: center;
  gap: 5px;

  padding: 5px 10px;
  border-radius: $border-radius;
}

.link,
.link :global(path),
p {
  transition: all 0.35s ease;
}

.link:global(.router-link-active),
.link:not(.link:global(.router-link-active)):hover {
  background-color: $secondary-color;

  p {
    color: $primary-color;
  }

  & :global(path) {
    fill: $primary-color;
  }
}

.link:global(.router-link-active) {
  cursor: default;
}
</style>
