<script setup lang="ts">
import type { INavigationItem } from '@/interfaces/workplace/navigation-item.interface'

import { Device } from '@/enums/device.enum'

import { ROUTES } from '@/constants/routes.constant'

import { useAppStore } from '@/stores/app.store'

import LogoMediumIcon from '@/components/icons/LogoMediumIcon.vue'
import Navigation from '@/components/workplace/sidebar/navigation/Navigation.vue'
import UserNavigation from '@/components/workplace/sidebar/user/User.vue'

const navigations: INavigationItem[] = [
  {
    icon: 'hostings',
    label: 'Хостинги',
    path: ROUTES.WORKPLACE.HOSTINGS.PATH,
  },
  {
    icon: 'settings',
    label: 'Настройки',
    path: ROUTES.WORKPLACE.SETTINGS.PATH,
  },
]

const appStore = useAppStore()
</script>

<template>
  <aside v-if="appStore.device === Device.DESKTOP" :class="[$s.sidebar, $s['sidebar--open']]">
    <LogoMediumIcon :class="$s.sidebar__logotype" />
    <Navigation :items="navigations" :class="$s.sidebar__navigation" />
    <UserNavigation :class="$s.sidebar__user" />
  </aside>
</template>

<style lang="scss" module="$s">
.sidebar {
  $padding-horizontal: 20px;

  height: calc(100vh - $padding-horizontal * 2);

  display: flex;
  flex-direction: column;
  gap: 15px;

  padding: $padding-horizontal 15px;
  box-shadow: 1px 0px 8px 0px $box-shadow-color;
  background-color: $component-background-color;

  &--open {
    min-width: $sidebar-open-width;
  }

  &::before,
  &::after {
    content: '';

    width: 100%;
    height: 1px;

    background-color: $stroke-color;
  }

  &__logotype {
    order: 0;
    text-align: center;
  }

  // TODO: Нужна ли?
  &::before {
    display: none;
    order: 1;
  }

  &__navigation {
    flex: 1 1;
    order: 2;
  }

  &::after {
    order: 3;
  }

  &__user {
    order: 4;
  }
}
</style>
