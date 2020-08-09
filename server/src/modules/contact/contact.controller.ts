import { Controller, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { ContactService } from './contact.service'
import { ContactEntity } from './contact.entity'
import {
  Crud,
  CrudAuth,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest
} from '@nestjsx/crud'
import { UserEntity } from '../user/user.entity'
import { AuthGuard } from '@nestjs/passport'

@UseGuards(AuthGuard('jwt'))
@Crud({
  model: {
    type: ContactEntity
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true
    }
  }
})
@CrudAuth({
  property: 'user',
  filter: (user: UserEntity) => ({
    userId: user.id
  }),
  persist: (user: UserEntity) => ({
    userId: user.id
  })
})
@Controller('contacts')
@ApiTags('contacts')
@ApiBearerAuth()
export class ContactController {
  constructor(public readonly service: ContactService) {}
}
