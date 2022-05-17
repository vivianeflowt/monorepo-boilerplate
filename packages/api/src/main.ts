import 'reflect-metadata'

import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import chalk from 'chalk'
import { log } from 'console'

import { AppModule } from './app.module'
import { setup } from './setup'

const PORT = process.env.PORT || 3000

const bootstrap = async () => {
  return NestFactory.create<NestExpressApplication>(AppModule)
    .then((app) => setup(app))
    .then(async (app) => {
      await app.listen(PORT)

      return app
    })
    .catch((error) => console.error(error))
    .finally(() => {
      log(
        `\n`,
        chalk.cyan('Swagger:'),
        chalk.white(`http://localhost:${PORT}/api/swagger \n`)
      )
    })
}

console.clear()

bootstrap()
