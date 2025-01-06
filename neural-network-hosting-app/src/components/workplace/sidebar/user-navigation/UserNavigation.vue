<script setup lang="ts">
import { type Ref, ref } from 'vue'

import NotFoundUserIcon from '@/components/icons/NotFoundUserIcon.vue'

import UserInfo from './UserInfo.vue'
import UserNavigationList from './UserNavigationList.vue'

const user: Ref<HTMLElement | null> = ref(null)
</script>

<template>
  <div :class="[$s.user, 'sidebar-user-navigaton']" ref="user">
    <NotFoundUserIcon />
    <UserInfo />
    <UserNavigationList :user-html-element="user" />
  </div>
</template>

<style lang="scss" module="$s">
.user {
  display: flex;
  align-items: center;
  gap: 10px;

  position: relative;

  cursor: pointer;
}
</style>
