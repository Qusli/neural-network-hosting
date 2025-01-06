<script setup lang="ts">
import { useAppStore } from '@/stores/app.store'

const appStore = useAppStore()
</script>

<template>
  <div :class="$s['user-info']">
    <p :class="$s['user-info__name']">{{ appStore.userEmailLabel }}</p>
    <p :class="$s['user-info__email']">{{ appStore.userRoleLabel }}</p>
  </div>
</template>

<style lang="scss" module="$s">
.user-info {
  flex: 1 1;

  overflow: hidden;

  &__email {
    font-size: 14px;
    color: $stroke-color;
  }

  &__name,
  &__email {
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
  }
}
</style>
