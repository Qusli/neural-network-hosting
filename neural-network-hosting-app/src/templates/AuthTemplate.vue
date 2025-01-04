<template>
  <div :class="$s.wrapper">
    <RouterView />
  </div>
</template>

<style lang="scss" module="$s">
.wrapper {
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: $phone) {
  .wrapper {
    width: 100%;
  }
}
</style>
