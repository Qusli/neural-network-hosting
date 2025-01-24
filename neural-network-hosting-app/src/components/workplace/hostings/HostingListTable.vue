<script setup lang="ts">
import { type ModelRef, type Ref, ref } from 'vue'

import type { IHosting } from '@/api/hosting-service-api/interfaces/hosting.interface'

import { useHostingsStore } from '@/stores/hostings.store'

import SharedCheckbox from '@/components/shared/SharedCheckbox.vue'
import { useRouter } from 'vue-router'
import { ROUTES } from '@/constants/routes.constant'

interface Props {
  hostings: IHosting[]
}

const router = useRouter()

const props = defineProps<Props>()

const hostingsStore = useHostingsStore()

const checkedAll: Ref<boolean> = ref(false)
const checked: Ref<boolean[]> = ref(new Array(props.hostings.length).fill(false))

const select: ModelRef<number[]> = defineModel('select', { required: true })

function onSelect(value: boolean, id: number) {
  if (value) {
    select.value.push(id)
  } else {
    select.value = [...select.value.filter((_id) => _id !== id)]
  }
}

function onSelectAll(value: boolean) {
  if (value) {
    select.value = [...props.hostings.map((hosting) => hosting.id)]
    checked.value = [...checked.value.map(() => true)]
  } else {
    select.value = []
    checked.value = [...checked.value.map(() => false)]
  }
}

function goToHosting() {
  router.push(ROUTES.WORKPLACE.HOSTING.PATH)
}
</script>

<template>
  <div :class="$s.table">
    <div :class="$s['table-row']">
      <div :class="[$s['table-cell'], $s['table-cell-checkbox-select-all']]">
        <SharedCheckbox v-model="checkedAll" @update:model-value="onSelectAll" />
      </div>
      <div :class="$s['table-cell']">Название</div>
      <div :class="$s['table-cell']">Модель</div>
      <div :class="$s['table-cell']">Статус</div>
      <div :class="$s['table-cell']"></div>
    </div>
    <div v-for="(hosting, index) in hostings" :key="hosting.id" :class="$s['table-row']" >
      <div :class="$s['table-cell']">
        <SharedCheckbox
          v-model="checked[index]"
          @update:model-value="onSelect(checked[index], hosting.id)"
        />
      </div>
      <div :class="[$s['table-cell'], $s['table-cell__title']]" @click="goToHosting">{{ hostingsStore.getHostingTitleLabel(hosting) }}</div>
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

  transition: all $transition-time $transition-function;

  &:not(:first-child):hover {
    color: rgba($secondary-color, 0.6);
    background-color: rgba($secondary-color, 0.1);
  }

  &:nth-child(n + 2) .table-cell {
    border-top-color: transparent;
  }

  // first table row
  &:first-child .table-cell:first-child {
    border-top-left-radius: $border-radius;
  }

  &:first-child .table-cell:last-child {
    border-top-right-radius: $border-radius;
  }

  // last table row
  &:last-child .table-cell:first-child {
    border-bottom-left-radius: $border-radius;
  }

  &:last-child .table-cell:last-child {
    border-bottom-right-radius: $border-radius;
  }
}

.table-cell {
  display: table-cell;

  padding: 10px;

  border-top: 1px solid rgba($stroke-color, 0.5);
  border-bottom: 1px solid rgba($stroke-color, 0.5);

  transition: background-color $transition-time $transition-function;

  &:first-child,
  &:last-child {
    width: 15px;

    border-left: 1px solid rgba($stroke-color, 0.5);
    border-right: 1px solid rgba($stroke-color, 0.5);
  }

  &__title {
    color: $primary-color;

    transition: color $transition-time $transition-function;

    cursor: pointer;
  }
}
</style>
