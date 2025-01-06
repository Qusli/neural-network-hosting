<script setup lang="ts">
import { reactive, useCssModule } from 'vue'

import SharedInlineIcon from './SharedInlineIcon.vue'

interface Props {
  buttonType?: 'button' | 'submit'
  type?: 'default' | 'primary' | 'secondary'
  label: string
  plusIcon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  buttonType: 'button',
  type: 'default',
  plusIcon: false,
})

const $style = useCssModule('$s')

const classes = reactive([
  props.type === 'default' ? $style['button--default'] : '',
  props.type === 'primary' ? $style['button--primary'] : '',
  props.type === 'secondary' ? $style['button--secondary'] : '',
  $style.button,
])
</script>

<template>
  <button :type="buttonType" :class="classes">
    <SharedInlineIcon v-if="plusIcon" name="plus" fill="white" />
    <span :class="$s['button__label']">{{ label }}</span>
  </button>
</template>

<style lang="scss" module="$s">
.button {
  $transition: all $transition-time $transition-function;

  max-height: 40px;

  display: flex;
  align-items: center;
  gap: 5px;

  padding: 10px 15px;
  border: 1px solid transparent;
  border-radius: $border-radius;

  box-shadow: $box-shadow;
  transition: $transition;
  -webkit-transition: $transition;
  -o-transition: $transition;

  &__label {
    width: 100%;
    text-align: center;

    transition: $transition;
    -webkit-transition: $transition;
    -o-transition: $transition;
  }

  cursor: pointer;

  &:hover {
    background-color: $component-background-color;
    border-color: $primary-color;

    .button__label {
      color: $primary-color;
    }

    :global(path) {
      fill: $primary-color;
    }
  }
}

.button--default {
  background-color: $component-background-color;
  border-color: $stroke-color;

  .button__label {
    color: $text-default-color;
  }

  :global(path) {
    fill: $text-default-color;
  }
}

.button--primary {
  background-color: $primary-color;

  .button__label {
    color: white;
  }

  :global(path) {
    fill: white;
  }
}

.button--secondary {
  background-color: $secondary-color;

  .button__label {
    color: $primary-color;
  }

  :global(path) {
    fill: $primary-color;
  }
}
</style>
