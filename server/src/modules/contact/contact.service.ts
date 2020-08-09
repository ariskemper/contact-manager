import { Injectable } from '@nestjs/common'
import { ContactEntity } from './contact.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'

@Injectable()
export class ContactService extends TypeOrmCrudService<ContactEntity> {
  constructor(@InjectRepository(ContactEntity) contactRepository) {
    super(contactRepository)
  }
}
