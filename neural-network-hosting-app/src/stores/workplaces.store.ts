import type { IWorkplace } from "@/api/user-service-api/interfaces/workplace.interface";
import type { IUser } from "@/api/workplace-service-api/interfaces/user.interface";
import { Role } from "@/enums/role.enum";
import { defineStore } from "pinia";

interface State {
    workplaces: {
        items: IWorkplace[]
        current: IWorkplace | null
    }
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

export const useWorkplacesStore = defineStore({
    id: "workplace-store",
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
    }),
    getters: {},
    actions: {
        switchWorkplace(workplace: IWorkplace) {
            this.workplaces.current = workplace
        }
    }
})