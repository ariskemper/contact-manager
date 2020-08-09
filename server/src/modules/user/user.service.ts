import { Injectable, NotAcceptableException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity, UserFillableFields } from './user.entity'
import { EncryptService } from '../encrypt/encrypt.service'

@Injectable()
export class UsersService {
  constructor(
    private readonly encryptService: EncryptService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async get(id: number) {
    return this.userRepository.findOne(id)
  }

  async getByEmail(email: string) {
    return this.userRepository.findOne({ email })
  }

  async getByEmailAndPass(email: string, password: string) {
    const user = await this.userRepository.findOne({ email })
    const validatePassword = await this.encryptService.validatePassword(password, user.password)
    if (validatePassword) {
      return user
    }
  }

  async create(payload: UserFillableFields) {
    const checkUserExistence = await this.getByEmail(payload.email)

    if (checkUserExistence) {
      throw new NotAcceptableException(
        'Another user with provided email already exists.'
      )
    }
    payload.password = await this.encryptService.generateHash(payload.password)
    const newUser = this.userRepository.create(payload)
    return this.userRepository.save(newUser)
  }
}
