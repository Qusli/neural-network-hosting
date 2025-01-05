<script setup lang="ts">
import MobileHeader from '@/modules/dashboard/mobile-header/MobileHeader.vue'
import Sidebar from '@/modules/dashboard/sidebar/Sidebar.vue'
</script>

<template>
  <!-- MOBILE HEADER -->
  <MobileHeader />

  <main :class="$s.main">
    <!-- SIDEBAR -->
    <Sidebar />

    <!-- MAIN ACTIVITY -->
    <RouterView />
  </main>

</template>

<style lang="scss" module="$s">
.main {
  display: flex;
}
</style>