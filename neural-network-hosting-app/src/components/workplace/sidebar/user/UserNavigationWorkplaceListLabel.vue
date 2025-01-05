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
  <div :class="[$s['list-label'], isActive ? $s['list-label--active'] : '']">
    <p>Рабочие пространства</p>
    <SharedInlineIcon
      name="arrow-forward"
      size="1rem"
      :class="$s['list-label__arrow-forward-icon']"
    />
  </div>
</template>

<style lang="scss" module="$s">
.list-label {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 7px 10px;

  &__arrow-forward-icon {
    transition: rotate 0.35s ease;
  }

  &__arrow-forward-icon :global(path) {
    fill: $stroke-color;
  }

  &--active .list-label__arrow-forward-icon {
    rotate: 180deg;
  }
}
</style>
