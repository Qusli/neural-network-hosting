<script setup lang="ts">
import HostingListTable from '@/components/workplace/hostings/HostingListTable.vue'
import { useHostingsStore } from '@/stores/hostings.store';

const hostingsStore = useHostingsStore()
</script>

<template>
  <HostingListTable :hostings="hostingsStore.hostings.items" />
</template>

<style lang="scss" module="$s"></style>
