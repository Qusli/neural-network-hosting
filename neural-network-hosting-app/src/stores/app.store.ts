import { defineStore } from "pinia";

import type { Device } from "@/enums/device.enum";
import type { IUser } from "@/interfaces/shared/user.interface";

interface State {
    user: IUser | null
}

export const useAppStore = defineStore({
    id: "app-store",
    state: (): State => ({
        user: {
            lastname: "Шустович",
            firstname: "Димитрий",
            patronic: "Сергеевич",
            email: "daxmxx4@gmail.com"
        }
    }),
    getters: {
        userTitle: (state: State): string => {
            if (!state.user?.lastname && !state.user?.firstname) {
                return "Аноним"
            }

            if (!state.user?.lastname && state.user?.firstname) {
                return state.user?.firstname
            }

            return `${state.user?.lastname} ${state.user?.firstname}`
        },
        userEmail: (state: State): string => {
            return state.user?.email ?? "Неизвестная почта"
        },
        device: (): Device => {
            if (screen.width <= 560) {
                return Device.PHONE
            }

            if (screen.width <= 768) {
                return Device.TABLET
            }

            return Device.DESKTOP
        }

    }
})