import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { ormconfig } from './config/ormconfig';

import AppController from './app.controller';

import { AppService } from './app.service';

import { modules } from './modules/modules.export';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ormconfig,
    }),
    ...modules,
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService],
})
class AppModule {
  constructor(private dataSource: DataSource) {}
}

export default AppModule;
