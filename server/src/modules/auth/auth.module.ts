import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserModule } from '../user/user.module'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
import { AuthController } from './auth.controller'
import { ConfigService } from '@nestjs/config'

@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (config: ConfigService) => {
        return {
          secret: config.get('JWT_SECRET'),
          signOptions: {
            expiresIn: Number(config.get('JWT_EXPIRATION_TIME'))
          }
        }
      },
      inject: [ ConfigService ]
    })
  ],
  controllers: [ AuthController ],
  providers: [ AuthService, JwtStrategy ],
  exports: [ PassportModule.register({ defaultStrategy: 'jwt' }) ]
})
export class AuthModule {}
