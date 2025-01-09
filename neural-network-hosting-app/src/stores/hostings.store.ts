import { HostingStatus } from "@/api/hosting-service-api/enums/hosting-status.enum";
import type { IHosting } from "@/api/hosting-service-api/interfaces/hosting.interface";
import { defineStore } from "pinia";

interface State {
    hostings: {
        items: IHosting[]
        current: IHosting | null
    }
}

export const useHostingsStore = defineStore({
    id: "hostings-store",
    state: (): State => ({
        hostings: {
            items: [
                {
                    id: 0,
                    title: 'test',
                    model: "GPT",
                    status: HostingStatus.ACTIVE
                },
                {
                    id: 0,
                    title: 'test 2',
                    model: "Berta",
                    status: HostingStatus.DEACTIVE
                },
            ],
            current: null
        }
    }),
    getters: {

    },
    actions: {
        getHostingTitleLabel(hosting: IHosting): string {
            if (!hosting.title) {
                return "Без названия"
            }
            
            return hosting.title
        },
        getHostingModelLabel(hosting: IHosting): string {
            if (!hosting.model) {
                return "Без модели"
            }
            
            return hosting.model
        },
        getHostingStatusLabel(hosting: IHosting): string {
            if (hosting.status === HostingStatus.ACTIVE) {
                return "Активный"
            }

            if (hosting.status === HostingStatus.DEACTIVE) {
                return "Неактивный"
            }

            return "Без статуса"
        }
    }
})