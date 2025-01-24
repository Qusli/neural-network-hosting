import { defineStore } from 'pinia'

import type { IUser } from '@/api/workplace-service-api/interfaces/user.interface'

import { Role } from '@/enums/role.enum'
import { ROUTES } from '@/constants/routes.constant'

interface State {
  user: IUser | null
  token: string | null
  isLogin: boolean
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
    token: null,
    isLogin: false
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
      const token = this.getToken()

      console.log(token)

      if (!token) {
        this.router.push(ROUTES.AUTH.LOGIN.PATH)
      }

      this.setUser(mockUser)

      this.isLogin = true
    },

    getToken(): string | null {
      const token: string | null = localStorage.getItem("token")

      if (!token) {
        return null
      }

      this.token = token;

      return token;
    },

    setToken(token: string): void {
      localStorage.setItem("token", token)
      
      this.token = token
    },

    setUser(user: IUser): void {
      this.user = user
    },
  },
})
