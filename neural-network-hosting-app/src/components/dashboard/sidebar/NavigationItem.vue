<script setup lang='ts'>
import SharedIcon from '@/components/shared/SharedIcon.vue';
import type { INavigationItem } from '@/interfaces/dashboard/navigation-item.interface';
import { computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

interface Props {
    item: INavigationItem
}

const props = defineProps<Props>()

const router = useRouter()

const isActiveRoute = computed(() => props.item.path === router.currentRoute.value.name)
</script>

<template>
    <RouterLink :to="{ name: item.path }" :class="$s.link" >
        <SharedIcon :name="item.icon" :fill="isActiveRoute ? '#3B82F6' : '#111827'" />
        <p>{{ item.label }}</p>
    </RouterLink>
</template>

<style lang='scss' module='$s'>
.link {
    display: flex;
    align-items: center;
    gap: 5px;

    padding: 5px 10px;
    border-radius: $border-radius;
    border: 2px solid transparent;

    transition: border-color 0.35s ease;
}

.link:global(.router-link-active) {
    background-color: $secondary-color;

    p {
        color: $primary-color;
    }

    cursor: default;
}

.link:not(.link:global(.router-link-active)):hover {
    border-color: $secondary-color;
}
</style>