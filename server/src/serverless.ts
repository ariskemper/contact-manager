import { APIGatewayProxyHandler } from 'aws-lambda'
import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './modules/main/app.module'
import { Server } from 'http'
import { ExpressAdapter } from '@nestjs/platform-express'
import * as awsServerlessExpress from 'aws-serverless-express'
import express from 'express'
import helmet from 'helmet'

let cachedServer: Server
const globalPrefix = '/api'

const bootstrapServer = async (): Promise<Server> => {
  const expressApp = express()
  const adapter = new ExpressAdapter(expressApp)
  const app = await NestFactory.create(AppModule, adapter)
  app.useGlobalPipes(new ValidationPipe())
  app.setGlobalPrefix(globalPrefix)
  app.use(helmet())
  app.enableCors()
  await app.init()
  return awsServerlessExpress.createServer(expressApp)
}

export const handler: APIGatewayProxyHandler = async (event, context) => {
  if (!cachedServer) {
    cachedServer = await bootstrapServer()
  }
  return awsServerlessExpress.proxy(cachedServer, event, context, 'PROMISE')
      .promise
}
