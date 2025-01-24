<script setup lang="ts">
import HostingList from '@/modules/workplace/hostings/HostingList.vue'

import SharedButton from '@/components/shared/SharedButton.vue'
import SharedPageContainer from '@/components/shared/page-wrappers/SharedPageContainer.vue'
import SharedPageSection from '@/components/shared/page-wrappers/SharedPageSection.vue'
</script>

<template>
  <SharedPageContainer title="Хостинги">
    <template #header-controls>
      <SharedButton plus-icon type="primary" label="Добавить хостинг" />
    </template>
    <template #default>
      <SharedPageSection :class="$s['page-section']">
        <HostingList :class="$s['hosting-list']" />
      </SharedPageSection>
    </template>
  </SharedPageContainer>
</template>

<style lang="scss" module="$s">
.page-section {
  height: calc(100% - 20px);
}
</style>
