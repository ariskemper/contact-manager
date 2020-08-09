import { ApiProperty } from '@nestjs/swagger'
import { IsEmail, IsString, MaxLength } from 'class-validator'

export class CreateContactDto {
  @ApiProperty({ type: 'string' })
  @IsString()
  @MaxLength(500)
  firstname: string

  @ApiProperty({ type: 'string' })
  @IsString()
  @MaxLength(500)
  lastname: string

  @ApiProperty({ type: 'string' })
  @IsEmail()
  @MaxLength(100)
  email: string

  @ApiProperty({ type: 'string' })
  @IsString()
  @MaxLength(100)
  phone: string
}
