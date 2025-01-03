<script setup lang='ts'>
import type { INavigationItem } from '@/interfaces/dashboard/navigation-item.interface';
import NavigationItem from './NavigationItem.vue';

interface Props {
    items: INavigationItem[]
}

defineProps<Props>()
</script>

<template>
    <nav :class="$s.navigation">
        <NavigationItem v-for="(item, index) in items" :key="index" :item="item" />
    </nav>
</template>

<style lang='scss' module='$s'>
.navigation {
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>