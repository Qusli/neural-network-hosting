<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>

<template>
  <main :class="$s['page-container']">
    <div :class="$s['page-container__header']">
      <h1>{{ title }}</h1>
      <slot name="header-controls"></slot>
    </div>
    <div :class="$s['page-container__body']">
      <slot></slot>
    </div>
  </main>
</template>

<style lang="scss" module="$s">
.page-container {
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 20px;

  padding: 20px;

  margin-left: auto;
  margin-right: auto;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__body {
    width: 100%;
  }
}
</style>
