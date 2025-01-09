import { defineStore } from 'pinia'

import type { IUser } from '@/api/workplace-service-api/interfaces/user.interface'

import { Role } from '@/enums/role.enum'

interface State {
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

// END MOCK DATA

export const useAppStore = defineStore({
  id: 'app-store',
  state: (): State => ({
    user: null,
  }),
  getters: {
    userEmailLabel: (state: State): string => {
      return state.user?.email ?? 'Неизвестная почта'
    },
    userRoleLabel: (state: State): string => {
      if (state.user?.role === Role.ADMINISTRATIOR) {
        return 'Администратор'
      }

      if (state.user?.role === Role.USER) {
        return 'Пользователь'
      }

      return 'Неизвестная роль'
    },
  },
  actions: {
    init() {
      this.setUser(mockUser)
    },

    setUser(user: IUser) {
      this.user = user
    },
  },
})
