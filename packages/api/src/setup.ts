import { ValidationPipe } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { NestExpressApplication } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import bodyParser from 'body-parser'
import compression from 'compression'
import helmet from 'helmet'
import f from 'lodash/fp'
import morgan from 'morgan'

const setupValidationPipe = (
  app: NestExpressApplication
): NestExpressApplication => {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validateCustomDecorators: true,
      forbidUnknownValues: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  )

  return app
}

const setupExpress = (app: NestExpressApplication): NestExpressApplication => {
  app.use(compression())
  app.use(helmet())
  app.use(morgan('dev'))
  app.enableCors()

  return app
}

const setupBodyParser = (
  app: NestExpressApplication
): NestExpressApplication => {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  return app
}

const setupSwagger = (app: NestExpressApplication): NestExpressApplication => {
  const config = app.get(ConfigService)

  app.setGlobalPrefix('api')

  const documentConfig = new DocumentBuilder()
    .setTitle(config.get<string>('npm_package_name', 'app'))
    .setDescription(config.get<string>('npm_package_description', ''))
    .setVersion(config.get<string>('npm_package_version', ''))
    .addBearerAuth()
    .build()

  const customOptions = {
    customSiteTitle: 'Swagger',
    explorer: true,
    displayOperationId: true,
    swaggerOptions: {
      deepScanRoutes: true,
      persistAuthorization: true,
    },
  }

  const document = SwaggerModule.createDocument(app, documentConfig)

  SwaggerModule.setup('/api/swagger', app, document, customOptions)

  return app
}

export const setup = (app: NestExpressApplication): NestExpressApplication => {
  return f.pipe(
    setupSwagger,
    setupBodyParser,
    setupExpress,
    setupValidationPipe
  )(app)
}
