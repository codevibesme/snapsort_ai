import { Module } from '@nestjs/common';

import MinioHelpersModule from '../helpers/minio.helpers.module';

import FilesController from './files.controller';

@Module({
  imports: [
    MinioHelpersModule,
  ],
  controllers: [FilesController],
})
export default class FilesModule { };
