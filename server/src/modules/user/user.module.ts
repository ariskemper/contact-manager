import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserEntity } from './user.entity'
import { UsersService } from './user.service'
import { EncryptModule } from '../encrypt/encrypt.module'

@Module({
  imports: [ EncryptModule, TypeOrmModule.forFeature([ UserEntity ]) ],
  exports: [ UsersService ],
  providers: [ UsersService ]
})
export class UserModule {}
