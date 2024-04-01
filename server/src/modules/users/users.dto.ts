import { OmitType, PickType } from '@nestjs/swagger';
import UsersEntity from './users.entity';

export class UsersDto extends UsersEntity { }

export class CreateUserDto extends OmitType(UsersDto, [
  'id',
  'isVerified',
  'isSubscribed',
]) { }

export class UpdateUserDto extends OmitType(UsersDto, [
  'email',
  'phone',
  'id',
  'username',
]) { }

export class SignInDto extends PickType(UsersDto, [
  'email',
  'username',
  'password',
]) { }
