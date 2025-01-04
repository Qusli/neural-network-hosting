import { defineStore } from 'pinia'

import type { IUser } from '@/interfaces/shared/user.interface'

import { Device } from '@/enums/device.enum'

import { windowInnerWidth } from '@/utils/on-resize'

interface State {
  user: IUser | null
}

export const useAppStore = defineStore({
  id: 'app-store',
  state: (): State => ({
    user: {
      lastname: 'Шустович',
      firstname: 'Димитрий',
      patronic: 'Сергеевич',
      email: 'daxmxx4@gmail.com',
    },
  }),
  getters: {
    userTitle: (state: State): string => {
      if (!state.user?.lastname && !state.user?.firstname) {
        return 'Аноним'
      }

      if (!state.user?.lastname && state.user?.firstname) {
        return state.user?.firstname
      }

      return `${state.user?.lastname} ${state.user?.firstname}`
    },
    userEmail: (state: State): string => {
      return state.user?.email ?? 'Неизвестная почта'
    },
    device: (): Device => {
      if (windowInnerWidth.value <= 560) {
        return Device.PHONE
      }

      if (windowInnerWidth.value <= 768) {
        return Device.TABLET
      }

      return Device.DESKTOP
    },
  },
  actions: {
    init() {},
  },
})
