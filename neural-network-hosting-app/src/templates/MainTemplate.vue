<script setup lang="ts">
import MobileHeader from '@/modules/workplace/mobile-header/MobileHeader.vue'
import Sidebar from '@/modules/workplace/sidebar/Sidebar.vue'
</script>

<template>
  <!-- MOBILE HEADER -->
  <MobileHeader />

  <div :class="$s.wrapper">
    <!-- SIDEBAR -->
    <Sidebar />

    <!-- MAIN ACTIVITY -->
    <RouterView />
  </div>
</template>

<style lang="scss" module="$s">
.wrapper {
  display: flex;
}
</style>
