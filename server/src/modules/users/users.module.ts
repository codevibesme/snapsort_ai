import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import UsersEntity from './users.entity';
import JWTHelpersModule from '../helpers/jwt.helpers.module';
import MailHelpersModule from '../helpers/mail.helpers.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity]),
    JWTHelpersModule,
    MailHelpersModule
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export default class UsersModule { }
