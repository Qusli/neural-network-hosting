<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

interface Props {
  name: string
  size?: string
  fill?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '1.5rem',
  fill: '#111827',
})

const icon = defineAsyncComponent(() => import(`@/assets/svg/${props.name}.svg`))
</script>

<template>
  <component :class="$s.icon" :is="icon" />
</template>

<style lang="scss" module="$s">
.icon {
  width: v-bind(size);
  height: v-bind(size);
}

.icon path {
  fill: v-bind(fill);
}
</style>
