import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, Index, PrimaryGeneratedColumn, Timestamp } from 'typeorm';
import { helper } from '../helpers/misc.helpers.service';
import { Role } from 'src/types/users';

@Entity({ name: 'users' })
@Index('users_username', ['username'])
@Index('users_email', ['email'])
@Index('users_phone', ['phone'])
class UsersEntity {
  @ApiProperty(helper.getApiProperty('userId'))
  @PrimaryGeneratedColumn({ name: 'id', type: 'int' })
  id: number;

  @ApiProperty(helper.getApiProperty('username'))
  @Column({ name: 'username', type: 'varchar', length: 100, unique: true })
  username: string;

  @ApiProperty(helper.getApiProperty('email'))
  @Column({ name: 'email', type: 'varchar', length: 100, unique: true })
  email: string;

  @ApiProperty(helper.getApiProperty('password'))
  @Column({ name: 'password', type: 'varchar', length: 64 })
  password: string;

  @ApiProperty(helper.getApiProperty('phone'))
  @Column({ name: 'phone', type: 'varchar', length: 20, unique: true })
  phone: string;

  @ApiProperty(helper.getApiProperty('name'))
  @Column({ name: 'name', type: 'varchar', length: 100 })
  name: string;

  @ApiProperty(helper.getApiProperty('role'))
  @Column({ name: 'role', type: 'enum', enum: Role })
  role: Role;

  @ApiProperty(helper.getApiProperty('isVerified'))
  @Column({ name: 'isVerified', type: 'boolean', default: false })
  isVerified: boolean;

  @ApiProperty(helper.getApiProperty('isSubscribed'))
  @Column({ name: 'isSubscribed', type: 'boolean', default: false })
  isSubscribed: boolean;
}

export default UsersEntity;
