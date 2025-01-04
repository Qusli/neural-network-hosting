<template>
  <i :class="$s.icon"></i>
</template>

<style lang="scss" module="$s">
.icon::before {
  content: url('@/assets/svg/logo-medium.svg');
}
</style>
