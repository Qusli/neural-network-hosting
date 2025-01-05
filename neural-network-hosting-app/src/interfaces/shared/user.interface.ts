import type { Role } from '@/enums/role.enum'

export interface IUser {
  id: number
  lastname?: string | null
  firstname?: string | null
  patronic?: string | null
  email: string
  role: Role
}
