<script setup lang="ts">
import type { INavigationItem } from '@/interfaces/navigation-item.interface'

import { Device } from '@/enums/device.enum'

import { ROUTES } from '@/constants/routes.constant'

import { device } from '@/utils/device'

import LogoMediumIcon from '@/components/icons/LogoMediumIcon.vue'
import NavigationList from '@/components/workplace/sidebar/navigation/NavigationList.vue'
import UserNavigation from '@/components/workplace/sidebar/user-navigation/UserNavigation.vue'

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
</script>

<template>
  <aside v-if="device === Device.DESKTOP" :class="[$s.sidebar, $s['sidebar--open']]">
    <LogoMediumIcon :class="$s.sidebar__logotype" />
    <NavigationList :items="navigations" :class="$s['sidebar__navigation-list']" />
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

  &__navigation-list {
    flex: 1 1;
    order: 1;
  }

  &::after {
    order: 2;
  }

  &__user {
    order: 3;
  }
}
</style>
