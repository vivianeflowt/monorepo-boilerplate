import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'

import setup from './database.setup'
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => setup().postgres() as TypeOrmModuleOptions,
      inject: [ConfigService],
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
