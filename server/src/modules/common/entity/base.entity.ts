import { CreateDateColumn, UpdateDateColumn } from 'typeorm'

export class BaseEntity {
  @CreateDateColumn({ nullable: true })
  createdAt?: Date

  @UpdateDateColumn({ nullable: true })
  updatedAt?: Date
}
