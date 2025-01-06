import type { IUser } from '@/api/workplace-service-api/interfaces/user.interface'

export interface IWorkplace {
  id: number
  title: string
  users: IUser[]
}
