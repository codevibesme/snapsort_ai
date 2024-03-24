import { Module } from '@nestjs/common';
import { MiscHelpersService } from './misc.helpers.service';

@Module({
  imports: [],
  controllers: [],
  providers: [MiscHelpersService],
  exports: [MiscHelpersService],
})
export default class MiscHelpersModule {}
