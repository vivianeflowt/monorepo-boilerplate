import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import configure from './config'
import { DatabaseModule } from './database'

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      load: configure(),
    }),
    // DatabaseModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
