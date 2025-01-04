<script setup lang='ts'>
import { reactive } from 'vue';

import { ROUTES } from '@/constants/routes.constant';

import AuthForm from '@/components/auth/AuthForm.vue';
import SharedButton from '@/components/shared/SharedButton.vue';
import SharedInput from '@/components/shared/SharedInput.vue';
import LogoBigIcon from '@/components/icons/LogoBigIcon.vue';

interface AuthData {
    login: string
    password: string
}

const data: AuthData = reactive({
    login: "",
    password: ""
})
</script>

<template>
    <AuthForm :class="$s['login-form']">
        <template #header>
            <LogoBigIcon />
        </template>
        <template #inputs>
            <SharedInput v-model="data.login" input-type="email" placeholder="ivan.ivanov@gmail.com" />
            <SharedInput v-model="data.password" input-type="password" placeholder="Пароль" />
        </template>
        <template #buttons>
            <SharedButton type="primary" label="Войти" />
            <div :class="$s.or">
                <p>или</p>
            </div>
            <SharedButton type="secondary" label="Регистрация" @click="$router.push(ROUTES.AUTH.REGISTRATION.PATH)"/>
        </template>
    </AuthForm>
</template>

<style lang='scss' module='$s'>
@import url("style.scss");

.login-form :global(.auth-form__inputs input),
.login-form :global(.auth-form__buttons button) {
    width:100%
}
</style>