<script setup lang='ts'>
import { ref, type Ref } from 'vue';
import { useRouter } from 'vue-router';
import { onClickOutside } from '@vueuse/core';

import { ROUTES } from '@/constants/routes.constant';
import { useAppStore } from '@/stores/app.store';

import NotFoundUserIcon from '@/components/icons/NotFoundUserIcon.vue';

const router = useRouter()

const appStore = useAppStore()

const isOpen: Ref<boolean> = ref(false)
const account: Ref<HTMLElement | null> = ref(null)
const navigation: Ref<HTMLElement | null> = ref(null)

function logout() {
    router.push(ROUTES.AUTH.LOGIN.PATH)
}

onClickOutside(navigation, (e: any) => {
    if (e.target.closest(".sidebar-account") === account.value) {
        isOpen.value = !isOpen.value
    } else {
        isOpen.value = false
    }
})
</script>

<template>
    <div :class="['sidebar-account', $s.account]" ref="account">
        <NotFoundUserIcon />
        <div :class="$s['account__user-info']" >
            <p :class="$s['user-info__name']">{{ appStore.userTitle }}</p>
            <p :class="$s['user-info__email']">{{ appStore.userEmail }}</p>
        </div>
        <div :class="[$s.account__navigation, isOpen ? $s['account__navigation--open'] : '']" ref="navigation">
            <RouterLink to="">Профиль</RouterLink>
            <RouterLink to="">Настройки</RouterLink>
            <p :class="$s.navigation__logout" @click="logout">Выйти</p>
        </div>
    </div>
</template>

<style lang='scss' module='$s'>
.account {
    display: flex;
    align-items: center;
    gap: 10px;

    position: relative;

    cursor: pointer;

    &__user-info {
        height: 100%;

        flex: 1 1;

        
        overflow: hidden;
    }

    &__navigation {
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

        a, .navigation__logout {
            padding: 7px 10px;
            transition: all 0.2s ease;
        }

        a:first-child {
            border-top-left-radius: $border-radius;
            border-top-right-radius: $border-radius;
        }

        .navigation__logout {
            border-bottom-left-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
        }

        a:hover {
            color: $primary-color;
            background-color: rgba($primary-color, 0.25);
        }

        a:active {
            background-color: rgba($primary-color, 0.4);
        }
    }
}

.user-info__name,
.user-info__email {
    overflow: hidden;
    text-overflow: ellipsis;
    text-wrap: nowrap;
}

.user-info__email {
    font-size: 14px;
    color: $stroke-color;
}

.navigation__logout {
    color: $red-color;
    cursor: pointer;

    &:hover {
        background-color: rgba($red-color, 0.25);
    }

    &:active {
        background-color: rgba($red-color, 0.4);
    }
}
</style>