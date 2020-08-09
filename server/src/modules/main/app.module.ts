import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { DatabaseModule } from '../database/database.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from '../auth/auth.module'
import { ContactModule } from '../contact/contact.module'
import { UserEntity } from '../user/user.entity'
import { ContactEntity } from '../contact/contact.entity'
import { EncryptModule } from '../encrypt/encrypt.module'
import { TerminusModule } from '@nestjs/terminus'
import { HealthController } from './health.controller'

@Module({
  imports: [
    AuthModule,
    ContactModule,
    ConfigModule.forRoot({ isGlobal: true }),
    EncryptModule,
    DatabaseModule,
    TerminusModule,
    TypeOrmModule.forFeature([ UserEntity, ContactEntity ])
  ],
  controllers: [ AppController, HealthController ],
  providers: [ AppService ]
})
export class AppModule /* implements NestModule */ {
  static port: string | number
  static isDev: boolean

  constructor(private readonly config: ConfigService) {
    AppModule.port = config.get('API_PORT')
    AppModule.isDev = config.get('NODE_ENV') === 'development'
  }
}
