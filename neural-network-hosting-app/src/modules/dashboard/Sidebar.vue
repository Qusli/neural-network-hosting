<script setup lang='ts'>
import { ROUTES } from '@/constants/routes.constant';
import type { INavigationItem } from '@/interfaces/dashboard/navigation-item.interface';

import Account from '@/components/dashboard/sidebar/Account.vue';
import Navigation from '@/components/dashboard/sidebar/Navigation.vue';
import LogoMediumIcon from '@/components/icons/LogoMediumIcon.vue';

const navigations: INavigationItem[] = [
    {
        icon: "hostings",
        label: "Хостинги",
        path: ROUTES.DASHBOARD.HOME.PATH
    }
]
</script>

<template>
    <aside :class="[$s.sidebar, $s['sidebar--open']]">
        <LogoMediumIcon :class="$s.sidebar__logotype" />
        <Navigation :items="navigations" :class="$s.sidebar__navigation" />
        <Account :class="$s.sidebar__account" />
    </aside>
</template>

<style lang='scss' module='$s'>
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
        width: $sidebar-open-width;
    }

    &::before,
    &::after {
        content: "";

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

    &__account {
        order: 4;
    }
}
</style>