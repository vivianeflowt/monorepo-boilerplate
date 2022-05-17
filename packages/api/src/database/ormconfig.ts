import * as dotenv from 'dotenv'

import { SnakeNamingStrategy } from './snake-naming.strategy'

dotenv.config()

module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  synchronize: false,
  logging: false,
  entities: ['src/**/*.entity{.ts,.js}', 'src/**/*.view-entity{.ts,.js}'],
  migrations: ['src/database/migrations/*{.ts,.js}'],
  subscribers: ['src/database/subscribers/*.subscriber{.ts,.js}'],
  seeds: ['src/database/seeds/**/*{.ts,.js}'],
  namingStrategy: new SnakeNamingStrategy(),
  cli: {
    migrationsDir: 'src/database/migrations',
    subscribersDir: 'src/database/subscribers',
  },
}
