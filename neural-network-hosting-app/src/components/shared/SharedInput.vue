<script setup lang="ts">
import { type ModelRef, type Ref, defineModel, ref, useId } from 'vue'

interface Props {
  inputType?: 'text' | 'email' | 'password' | 'hidden'
  // type?: ,
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  inputType: 'text',
  placeholder: '',
})

const model: ModelRef<string> = defineModel({ required: true })

const _key = useId()

const focus: Ref<boolean> = ref(false)

const onFocusIn = () => {
  console.log()
  focus.value = true
}

const onFocusOut = () => {
  focus.value = false
}
</script>

<template>
  <label :for="_key" :class="[focus ? $s['label--focus'] : '', $s.label]">
    <input
      v-model="model"
      :type="inputType"
      :placeholder="placeholder"
      :id="_key"
      v-on:focusin="onFocusIn"
      v-on:focusout="onFocusOut"
      :class="$s.input"
    />
  </label>
</template>

<style lang="scss" module="$s">
.label {
  $border-width: 3px;

  display: flex;

  position: relative;

  &::before {
    content: '';

    width: 100%;
    height: 100%;

    position: absolute;
    top: -$border-width;
    left: -$border-width;

    border: $border-width solid transparent;
    border-radius: calc($border-radius + $border-width);

    transition: border-color 0.35s ease;
    pointer-events: none;
  }

  &--focus::before {
    border-color: rgba($primary-color, 0.5);
  }

  &--focus .input {
    border-color: $primary-color;
  }
}

.input {
  $transition: all 0.35s ease;

  position: relative;

  padding: 15px 24px;

  border: 1px solid $stroke-color;
  border-radius: $border-radius;

  transition: $transition;
  -webkit-transition: $transition;
  -o-transition: $transition;

  z-index: 10;

  &:hover {
    border-color: $primary-color;
  }
}
</style>
