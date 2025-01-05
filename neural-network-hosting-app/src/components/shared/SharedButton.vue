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
    <span>{{ label }}</span>
  </button>
</template>

<style lang="scss" module="$s">
.button {
  $transition: all 0.35s ease;

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

  span {
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

    span {
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

  span {
    color: $text-default-color;
  }
}

.button--primary {
  background-color: $primary-color;

  span {
    color: white;
  }
}

.button--secondary {
  background-color: $secondary-color;

  span {
    color: $primary-color;
  }
}
</style>
