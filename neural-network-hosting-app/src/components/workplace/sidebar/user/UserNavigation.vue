<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { type Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

import { ROUTES } from '@/constants/routes.constant'

import { useAppStore } from '@/stores/app.store'

import UserNavigationWorkplaceList from './UserNavigationWorkplaceList.vue'
import UserNavigationWorkplaceListLabel from './UserNavigationWorkplaceListLabel.vue'

interface Props {
  user: HTMLElement | null
}

const props = defineProps<Props>()

const router = useRouter()

const appStore = useAppStore()

const navigationHasOpen: Ref<boolean> = ref(false)
const workplacesesHasOpen: Ref<boolean> = ref(false)

const navigation: Ref<HTMLElement | null> = ref(null)

function logout() {
  router.push(ROUTES.AUTH.LOGIN.PATH)
}

onClickOutside(navigation, (e: any) => {
  if (e.target.closest('.sidebar-user-navigaton') === props.user) {
    navigationHasOpen.value = !navigationHasOpen.value
  } else {
    navigationHasOpen.value = false
    workplacesesHasOpen.value = false
  }
})
</script>

<template>
  <div
    :class="[$s.user__navigation, navigationHasOpen ? $s['user__navigation--open'] : '']"
    ref="navigation"
  >
    <RouterLink :to="ROUTES.USER.PROFILE.PATH" :class="$s.navigation__item">Профиль</RouterLink>
    <RouterLink :to="ROUTES.USER.SETTINGS.PATH" :class="$s.navigation__item">Настройки</RouterLink>
    <UserNavigationWorkplaceListLabel
      :is-active="workplacesesHasOpen"
      @click="workplacesesHasOpen = !workplacesesHasOpen"
    />
    <p :class="[$s.navigation__item, $s.navigation__logout]" @click="logout">Выйти</p>

    <!-- WORKPLACE LIST -->
    <UserNavigationWorkplaceList
      :items="appStore.workplaceses.items"
      :class="[$s.list, workplacesesHasOpen ? $s['list--open'] : '']"
    />
  </div>
</template>

<style lang="scss" module="$s">
.user__navigation {
  width: 100%;

  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: calc(100% + 10px);

  background-color: $component-background-color;
  box-shadow: -2px 0px 8px rgba($box-shadow-color, 0.75);
  border-radius: $border-radius;

  z-index: 100;
  opacity: 0;

  transition: opacity 0.35s ease;
  pointer-events: none;

  &--open {
    opacity: 1;
    pointer-events: all;
  }
}

.navigation__item {
  padding: 7px 10px;
  transition: all 0.2s ease;
}

.navigation__item:first-child {
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
}

.navigation__item:hover,
.navigation__item.navigation__item-active,
.navigation__item:global(.router-link-active) {
  color: $primary-color;
  background-color: $secondary-color;
}

.navigation__item:not(.navigation__item:global(.router-link-active)):active {
  background-color: rgba($primary-color, 0.4);
}

.navigation__logout {
  border-bottom-left-radius: $border-radius;
  border-bottom-right-radius: $border-radius;

  color: $red-color !important;
  cursor: pointer;

  &:hover {
    background-color: rgba($red-color, 0.25);
  }

  &:active {
    background-color: rgba($red-color, 0.4);
  }
}

.list {
  opacity: 0;

  transition: opacity 0.35s ease;
  pointer-events: none;

  &--open {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
