<script setup lang="ts">
import { reactive } from 'vue'

import { ROUTES } from '@/constants/routes.constant'

import AuthForm from '@/components/auth/AuthForm.vue'
import LogoBigIcon from '@/components/icons/LogoBigIcon.vue'
import SharedButton from '@/components/shared/SharedButton.vue'
import SharedInput from '@/components/shared/SharedInput.vue'

interface RegistrationData {
  login: string
  password: string
  repeatPassword: string
}

const data: RegistrationData = reactive({
  login: '',
  password: '',
  repeatPassword: '',
})
</script>

<template>
  <AuthForm :class="$s['registration-form']">
    <template #header>
      <LogoBigIcon />
    </template>
    <template #inputs>
      <SharedInput v-model="data.login" input-type="email" placeholder="ivan.ivanov@gmail.com" />
      <SharedInput v-model="data.password" input-type="password" placeholder="Пароль" />
      <SharedInput
        v-model="data.repeatPassword"
        input-type="password"
        placeholder="Повторите пароль"
      />
    </template>
    <template #buttons>
      <SharedButton type="primary" label="Регистрация" />
      <div :class="$s.or">
        <p>или</p>
      </div>
      <SharedButton
        type="secondary"
        label="Войти в аккаунт"
        @click="$router.push(ROUTES.AUTH.LOGIN.PATH)"
      />
    </template>
  </AuthForm>
</template>

<style lang="scss" module="$s">
@import url('style.scss');

.registration-form :global(.auth-form__inputs input),
.registration-form :global(.auth-form__buttons button) {
  width: 100%;
}
</style>
