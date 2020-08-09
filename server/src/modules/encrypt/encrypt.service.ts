import { Injectable } from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class EncryptService {

  constructor(private readonly configService: ConfigService) {}

  public async generateHash(password: string): Promise<string> {
    const salt = await this.generateSalt()
    return bcrypt.hash(password, salt)
  }

  public async validatePassword(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash)
  }

  private async generateSalt() {
    return bcrypt.genSalt(parseInt(this.configService.get('SALT_ROUNDS')))
  }
}
