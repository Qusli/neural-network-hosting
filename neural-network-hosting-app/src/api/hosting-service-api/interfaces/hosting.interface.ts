import type { HostingStatus } from "../enums/hosting-status.enum"

export interface IHosting {
  id: number
  title: string
  model: string
  status: HostingStatus
}
