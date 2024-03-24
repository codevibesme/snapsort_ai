import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { helper } from '../helpers/misc.helpers.service';
import { Role } from 'src/types/users';

@Entity({ name: 'users' })
@Index('users_username', ['username'])
@Index('users_email', ['email'])
@Index('users_phone', ['phone'])
class UsersEntity {
  @ApiProperty(helper.getApiProperty('userId'))
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @ApiProperty(helper.getApiProperty('username'))
  @Column({ type: 'varchar', length: 100, unique: true })
  username: string;

  @ApiProperty(helper.getApiProperty('email'))
  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @ApiProperty(helper.getApiProperty('password'))
  @Column({ type: 'varchar', length: 32 })
  password: string;

  @ApiProperty(helper.getApiProperty('phone'))
  @Column({ type: 'varchar', length: 20, unique: true })
  phone: string;

  @ApiProperty(helper.getApiProperty('userName'))
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ApiProperty(helper.getApiProperty('role'))
  @Column({ enum: ['admin', 'user'] })
  role: Role;

  @ApiProperty(helper.getApiProperty('verified'))
  @Column({ type: 'boolean', default: false })
  verified: boolean;

  @ApiProperty(helper.getApiProperty('subscribed'))
  @Column({ type: 'boolean', default: false })
  subscribed: boolean;
}

export default UsersEntity;
