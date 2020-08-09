import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Contact } from './contact.interface'
import { BaseEntity } from '../common/entity/base.entity'
import { UserEntity } from '../user/user.entity'

@Entity({
  name: 'contacts'
})
export class ContactEntity extends BaseEntity implements Contact {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({
    nullable: false,
    length: 500
  })
  firstName: string

  @Column({
    nullable: false,
    length: 500
  })
  lastName: string

  @Column({
    unique: true,
    nullable: false
  })
  email: string

  @Column({
    unique: true,
    nullable: false
  })
  phone: string

  @ManyToOne(() => UserEntity)
  public user: UserEntity

  @Column()
  userId: string
}
