import { UserEntity } from '../user/user.entity'

export interface Contact {
  id?: number | string
  firstName: string
  lastName: string
  email: string
  phone?: string
  userId?: string
}
