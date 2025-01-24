<script setup lang="ts">
import { type ModelRef, useId } from 'vue'

interface Props {
  label?: string
}

defineProps<Props>()

const _id = useId()

const model: ModelRef<boolean> = defineModel({ required: false, default: false })
</script>

<template>
  <div :class="$s['checkbox-container']">
    <div :class="$s['checkbox-container__wrapper']">
      <input v-model="model" type="checkbox" :id="_id" :class="$s['checkbox']" />
      <div :class="$s['custom-checkbox']"></div>
    </div>
    <label v-if="!!label" :for="_id" :class="$s['checkbox-container__label']">{{ label }}</label>
  </div>
</template>

<style lang="scss" module="$s">
.checkbox-container {
  width: max-content;

  display: flex;
  align-items: center;
  gap: 5px;

  cursor: pointer;

  &__label {
    cursor: pointer;
  }

  &:hover .custom-checkbox,
  .checkbox:checked + .custom-checkbox {
    border-color: $primary-color;
  }

  &:hover .custom-checkbox::after {
    width: 150%;
    height: 150%;
  }
}

.checkbox-container__wrapper {
  position: relative;
}

.checkbox {
  width: 16px;
  height: 16px;

  position: absolute;

  opacity: 0;
  z-index: 10;

  cursor: pointer;
}

.custom-checkbox {
  $border-width: 1px;

  $width: calc(18px - ($border-width + 1px));
  $height: calc(18px - ($border-width + 1px));

  width: $width;
  height: $height;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  border: $border-width solid $stroke-color;
  border-radius: 4px;

  transition: border-color $transition-time $transition-function;

  z-index: 1;

  &::before {
    content: url('@/assets/svg/checked.svg');

    max-width: 14px;
    max-height: 18px;

    opacity: 0;

    transition: opacity calc($transition-time - 0.2s) $transition-function;
  }

  &::after {
    content: "";

    width: 0;
    height: 0;

    position: absolute;

    border-radius: 100%;

    background-color: $secondary-color;

    transition: all $transition-time $transition-function;
  }
}

.checkbox:checked + .custom-checkbox::before {
  opacity: 1;
}
</style>
