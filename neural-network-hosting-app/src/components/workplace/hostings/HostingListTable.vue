<script setup lang="ts">
import type { IHosting } from '@/api/hosting-service-api/interfaces/hosting.interface'
import { useHostingsStore } from '@/stores/hostings.store';

interface Props {
  hostings: IHosting[]
}

defineProps<Props>()

const hostingsStore = useHostingsStore()
</script>

<template>
  <div :class="$s.table">
    <div :class="$s['table-row']">
      <div :class="$s['table-cell']"></div>
      <div :class="$s['table-cell']">Название</div>
      <div :class="$s['table-cell']">Модель</div>
      <div :class="$s['table-cell']">Статус</div>
      <div :class="$s['table-cell']"></div>
    </div>
    <div v-for="hosting in hostings" :key="hosting.id" :class="$s['table-row']">
      <div :class="$s['table-cell']">checkbox</div>
      <div :class="$s['table-cell']">{{ hostingsStore.getHostingTitleLabel(hosting) }}</div>
      <div :class="$s['table-cell']">{{ hostingsStore.getHostingModelLabel(hosting) }}</div>
      <div :class="$s['table-cell']">{{ hostingsStore.getHostingStatusLabel(hosting) }}</div>
      <div :class="$s['table-cell']"></div>
    </div>
  </div>
</template>

<style lang="scss" module="$s">
.table {
  width: 100%;

  display: table;
}

.table-wrapper {
  width: 100%;
}

.table-row {
  width: 100%;

  display: table-row;

  &:nth-child(n + 2) .table-cell{
    border-top-color: transparent;
  }
}

.table-cell {
  display: table-cell;

  padding: 10px;

  border-top: 1px solid rgba($stroke-color, 0.5);
  border-bottom: 1px solid rgba($stroke-color, 0.5);

  &:first-child,
  &:last-child {
    width: 40px;

    border: 1px solid rgba($stroke-color, 0.5);
  }
}
</style>
