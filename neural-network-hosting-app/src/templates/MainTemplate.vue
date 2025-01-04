<script setup lang="ts">
import MobileHeader from '@/modules/dashboard/mobile-header/MobileHeader.vue'
import Sidebar from '@/modules/dashboard/sidebar/Sidebar.vue'
</script>

<template>
  <!-- SIDEBAR -->
  <Sidebar />

  <!-- MOBILE HEADER -->
  <MobileHeader />

  <!-- MAIN ACTIVITY -->
  <RouterView />
</template>
