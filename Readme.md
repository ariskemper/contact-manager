# Contact Manager
Contact Manager API with user login, registration and managing user contacts.

# Server API
Server api uses Nestjs Framework 7

Server Tech Stack:
- Nestjs Framework 7 with Express [@nestjs] (https://github.com/nestj)
- TypeOrm [@nestjs] (https://github.com/typeorm/typeorm)
- Crud [@nestjsx/crud] (@nestjsx/crud](https://github.com/nestjsx/crud)
- Jest [jest] (https://github.com/facebook/jest)

## Server Environment Vars
Set environment variables in .env for local development

```
  DATABASE_TYPE=postgres
  DATABASE_NAME=app
  DATABASE_USERNAME=user
  DATABASE_PASSWORD=pass123
  DATABASE_HOST=127.0.0.1
  DATABASE_PORT=5432
  JWT_SECRET=secret
  JWT_EXPIRATION_TIME=86400
  SALT_ROUNDS=15
  API_HOST=127.0.0.1
  API_PORT=3000
```
## Server Run
Start postgresql database

Move to server directory
```bash
$ cd server
```

```bash
$ npm run deploy:up
```

Api documentation is available http://localhost:3000/api/docs and api at http://localhost:3000/api

## Server Installation

```bash
$ npm install

# development
$ npm run start:dev

# production build
$ npm run build 

# production
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# develop tests
$ npm run test:watch

# test coverage
$ npm run test:cov
```


# Client
Angular 10 application using Nebular theme (@akveo/nebular) [https://github.com/akveo/nebular]

## Install
```bash
$ npm install
```

## Run
```bash
$ npm run start
```