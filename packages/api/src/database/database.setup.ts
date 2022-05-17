import f from 'lodash/fp'
import { join } from 'path'

import { SnakeNamingStrategy } from './snake-naming.strategy'

export default () => {
  const postgres = (options: Object) => ({
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: Number(process.env.DATABASE_PORT) || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    ...options,
  })

  const sqlite = (options: Object) => ({
    type: 'sqlite',
    database: process.env.DATABASE_FILE || 'database.sqlite',
    ...options,
  })

  const memory = (options: Object) => ({
    type: 'sqlite',
    database: ':memory:',
    ...options,
  })

  const options = {
    entities: [
      join(__dirname, '../**/*.entity{.ts,.js}'),
      join(__dirname, '../**/*.view-entity{.ts,.js}'),
    ],
    migrations: [join(__dirname, './migrations/*{.ts,.js}')],
    subscribers: [join(__dirname, './subscribers/*.subscriber{.ts,.js}')],
    synchronize: Boolean(process.env.DATABASE_SYNCHRONIZE) || true,
    dropSchema: Boolean(process.env.DATABASE_DROP_SCHEMA) || false,
    logging: ['query', 'error'],
    logger: 'advanced-console',
    namingStrategy: new SnakeNamingStrategy(),
    migrationsTableName: 'typeorm_migrations',
    metadataTableName: 'typeorm_metadata',
  }

  return {
    postgres: () => f.pipe(postgres)(options),
    sqlite: () => f.pipe(sqlite)(options),
    memory: () => f.pipe(memory)(options),
  }
}
