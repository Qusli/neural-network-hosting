<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { type Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

import { ROUTES } from '@/constants/routes.constant'


import WorkplaceList from './WorkplaceList.vue'
import WorkplaceListLabel from './WorkplaceListLabel.vue'
import { useWorkplacesStore } from '@/stores/workplaces.store'
import { useAppStore } from '@/stores/app.store'
import { useHostingsStore } from '@/stores/hostings.store'

interface Props {
  userHtmlElement: HTMLElement | null
}

const props = defineProps<Props>()

const router = useRouter()

const appStore = useAppStore()
const hostingsStore = useHostingsStore()
const workplacesStore = useWorkplacesStore()

const navigationListHasOpen: Ref<boolean> = ref(false)
const workplaceListHasOpen: Ref<boolean> = ref(false)

const navigation: Ref<HTMLElement | null> = ref(null)

function logout() {
  appStore.$reset()
  hostingsStore.$reset()
  workplacesStore.$reset()

  router.push(ROUTES.AUTH.LOGIN.PATH)
}

onClickOutside(navigation, (e: any) => {
  if (e.target.closest('.sidebar-user-navigaton') === props.userHtmlElement) {
    navigationListHasOpen.value = !navigationListHasOpen.value
  } else {
    navigationListHasOpen.value = false
    workplaceListHasOpen.value = false
  }
})
</script>

<template>
  <div
    :class="[
      $s['user__navigation-list'],
      navigationListHasOpen ? $s['user__navigation-list--open'] : '',
    ]"
    ref="navigation"
  >
    <RouterLink :to="ROUTES.USER.PROFILE.PATH" :class="$s['navigation-list__item']"
      >Профиль</RouterLink
    >
    <RouterLink :to="ROUTES.USER.SETTINGS.PATH" :class="$s['navigation-list__item']"
      >Настройки</RouterLink
    >
    <WorkplaceListLabel
      :is-active="workplaceListHasOpen"
      @click="workplaceListHasOpen = !workplaceListHasOpen"
    />
    <p :class="[$s['navigation-list__item'], $s['navigation-list__logout']]" @click="logout">
      Выйти
    </p>

    <!-- WORKPLACE LIST -->
    <WorkplaceList
      :items="workplacesStore.workplaces.items"
      :class="[$s['workplace-list'], workplaceListHasOpen ? $s['workplace-list--open'] : '']"
    />
  </div>
</template>

<style lang="scss" module="$s">
.user__navigation-list {
  width: 100%;

  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: calc(100% + 10px);

  background-color: $component-background-color;
  box-shadow: -2px 0px 8px rgba($box-shadow-color, 0.75);
  border-radius: $border-radius;

  transition: opacity $transition-time $transition-function;
  -webkit-transition: opacity $transition-time $transition-function;
  -o-transition: opacity $transition-time $transition-function;

  opacity: 0;
  z-index: 100;
  pointer-events: none;

  &--open {
    opacity: 1;
    pointer-events: all;
  }
}

.navigation-list__item {
  padding: 7px 10px;

  transition: all 0.2s $transition-function;
  -webkit-transition: all 0.2s $transition-function;
  -o-transition: all 0.2s $transition-function;
}

.navigation-list__item:first-child {
  border-top-left-radius: $border-radius;
  border-top-right-radius: $border-radius;
}

.navigation-list__item:hover,
.navigation-list__item.navigation__item-active,
.navigation-list__item:global(.router-link-active) {
  color: $primary-color;
  background-color: $secondary-color;
}

.navigation-list__item:not(:global(.router-link-active)):active {
  background-color: rgba($primary-color, 0.4);
}

.navigation-list__logout {
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

.workplace-list {
  height: 150%;

  position: absolute;
  bottom: 0;
  left: calc(100% + 10px);

  transition: opacity $transition-time $transition-function;
  -webkit-transition: opacity $transition-time $transition-function;
  -o-transition: opacity $transition-time $transition-function;

  opacity: 0;
  pointer-events: none;

  &--open {
    opacity: 1;
    pointer-events: all;
  }
}
</style>
