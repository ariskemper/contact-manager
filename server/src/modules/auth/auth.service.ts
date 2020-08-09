import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserEntity } from '../user/user.entity'
import { UsersService } from '../user/user.service'
import { LoginDto } from './requests/auth.dto'
import { LoginStatus } from './interfaces/login.interface'

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService
  ) {}

  async generateToken(user: UserEntity): Promise<LoginStatus> {
    return {
      expiresIn: Number(process.env.JWT_EXPIRATION_TIME),
      accessToken: this.jwtService.sign({ ...user })
    }
  }

  async validateUser({ email, password }: LoginDto): Promise<any> {
    const user = await this.userService.getByEmailAndPass(email, password)
    if (!user) {
      throw new UnauthorizedException('Wrong email or password !')
    }
    return user
  }
}
