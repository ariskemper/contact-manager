import { Exclude } from 'class-transformer'
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './user.interface'

@Entity({
  name: 'users'
})
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 255 })
  fullName!: string

  @Column({ length: 255 })
  email!: string

  @Column({
    name: 'password',
    length: 255
  })
  @Exclude()
  password!: string
}

export class UserFillableFields {
  email!: string
  fullName!: string
  password!: string
}
