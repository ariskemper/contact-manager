
import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class LoginDto {
  @ApiProperty({ required: true })
  @IsEmail()
  email!: string

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @MinLength(5)
  password!: string
}

export class RegisterDto {
  @ApiProperty({ required: true })
  @IsEmail()
  email!: string

  @ApiProperty({ required: true })
  @IsNotEmpty()

  @ApiProperty({ required: true })
  @IsNotEmpty()
  fullName!: string

  @ApiProperty({ required: true })
  @IsNotEmpty()
  @MinLength(5)
  password!: string
}

export interface JwtDto {
  sub: string
  iat?: number
  exp?: number
}
