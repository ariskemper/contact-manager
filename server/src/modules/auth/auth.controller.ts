import { Body, Controller, HttpStatus, Post, UseGuards } from '@nestjs/common'
import { ApiResponse, ApiTags } from '@nestjs/swagger'
import { AuthGuard } from '@nestjs/passport'

import { AuthService } from './auth.service'
import { LoginDto, RegisterDto } from './requests/auth.dto'
import { UsersService } from '../user/user.service'
import { LoginStatus } from './interfaces/login.interface'

@Controller('auth')
@ApiTags('authentication')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService
  ) {}

  @Post('login')
  @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'Successful Login' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  async login(@Body() credentials: LoginDto): Promise<LoginStatus> {
    const user = await this.authService.validateUser(credentials)
    return this.authService.generateToken(user)
  }

  @Post('register')
  @ApiResponse({
    status: HttpStatus.ACCEPTED,
    description: 'Successful Registration'
  })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Bad Request' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  async register(@Body() payload: RegisterDto): Promise<LoginStatus> {
    const user = await this.userService.create(payload)
    return this.authService.generateToken(user)
  }
}
