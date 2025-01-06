<script setup lang="ts">
import SharedInlineIcon from '@/components/shared/SharedInlineIcon.vue'

interface Props {
  isActive: boolean
}

withDefaults(defineProps<Props>(), {
  isActive: false,
})
</script>

<template>
  <div :class="[$s['workplace-list__label'], isActive ? $s['workplace-list__label-active'] : '']">
    <p>Рабочие пространства</p>
    <SharedInlineIcon
      name="arrow-forward"
      size="1rem"
      :class="$s['label__arrow-forward-icon']"
    />
  </div>
</template>

<style lang="scss" module="$s">
.workplace-list__label {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 7px 10px;

  &-active .label__arrow-forward-icon {
    rotate: 180deg;
  }
}

.label__arrow-forward-icon {
  transition: rotate $transition-time $transition-function;
}

.label__arrow-forward-icon :global(path) {
  fill: $stroke-color;
}
</style>
