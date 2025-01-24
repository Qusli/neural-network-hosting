<script setup lang="ts">
import { useHostingsStore } from '@/stores/hostings.store'

import HostingListTable from '@/components/workplace/hostings/HostingListTable.vue'

const hostingsStore = useHostingsStore()
</script>

<template>
  <HostingListTable
    :select="hostingsStore.hostings.selected"
    :hostings="hostingsStore.hostings.items"
  />
</template>
