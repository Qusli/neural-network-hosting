import type { IUser } from './user.interface'

export interface IWorkplace {
  id: number
  title: string
  users: IUser[]
}
