import { defineStore } from 'pinia'

import type { IUser } from '@/interfaces/shared/user.interface'
import type { IWorkplace } from '@/interfaces/shared/workplace.interface'

import { Device } from '@/enums/device.enum'
import { Role } from '@/enums/role.enum'

import { windowInnerWidth } from '@/utils/on-resize'

interface State {
  workplaceses: {
    items: IWorkplace[]
    current: IWorkplace | null
  }
  user: IUser | null
}

// MOCK DATA

const mockUser: IUser = {
  id: 0,
  lastname: 'Шустович',
  firstname: 'Димитрий',
  patronic: 'Сергеевич',
  email: 'daxmxx4@gmail.com',
  role: Role.ADMINISTRATIOR,
}

const mockWorkplace: IWorkplace = {
  id: 2,
  title: 'Новое рабочее пространство',
  users: [mockUser],
}

// END MOCK DATA

export const useAppStore = defineStore({
  id: 'app-store',
  state: (): State => ({
    workplaceses: {
      items: [
        {
          id: 1,
          title: 'ООО "Взор"',
          users: [mockUser],
        },
        mockWorkplace,
      ],
      current: mockWorkplace,
    },
    user: mockUser,
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
    userRoleLabel: (state: State): string => {
      if (state.user?.role === Role.ADMINISTRATIOR) {
        return 'Администратор'
      }

      return 'Пользователь'
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
