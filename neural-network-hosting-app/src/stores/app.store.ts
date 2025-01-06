import { defineStore } from 'pinia'

import type { IWorkplace } from '@/api/user-service-api/interfaces/workplace.interface'
import type { IUser } from '@/api/workplace-service-api/interfaces/user.interface'

import { Role } from '@/enums/role.enum'

interface State {
  workplaces: {
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
    workplaces: {
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
