<script setup lang="ts">
import SharedButton from '@/components/shared/SharedButton.vue'
import SharedPageContainer from '@/components/shared/page-wrappers/SharedPageContainer.vue'
import SharedPageSection from '@/components/shared/page-wrappers/SharedPageSection.vue'
import HostingList from '@/modules/workplace/hostings/HostingList.vue'
</script>

<template>
  <SharedPageContainer title="Хостинги">
    <template #header-controls>
      <SharedButton plus-icon type="primary" label="Добавить хостинг" />
    </template>
    <template #default>
      <SharedPageSection>
        <HostingList />
      </SharedPageSection>
    </template>
  </SharedPageContainer>
</template>
