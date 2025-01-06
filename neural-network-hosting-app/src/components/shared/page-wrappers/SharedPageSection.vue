<script setup lang="ts"></script>

<template>
  <section :class="$s['page-section']">
    <slot></slot>
  </section>
</template>

<style lang="scss" module="$s">
.page-section {
  padding: 10px 15px;
  border-radius: $border-radius;
  box-shadow: $box-shadow;

  background-color: $component-background-color;
}
</style>
