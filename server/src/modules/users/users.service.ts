import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, SignInDto, UsersDto } from './users.dto';
import { InjectRepository } from '@nestjs/typeorm';
import UsersEntity from './users.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/types/users';
import * as bcrypt from 'bcrypt';
import { JwtHelpersService } from '../helpers/jwt.helpers.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
    private readonly jwt: JwtHelpersService,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<void> {
    const { email, username, phone } = createUserDto;

    const user = await this.usersRepository
      .createQueryBuilder('users')
      .where('users.email = :email', { email })
      .orWhere('users.phone = :phone', { phone })
      .orWhere('users.username = :username', { username })
      .getOne();
    if (user) {
      throw new ConflictException('User already exists');
    }

    let newUser: UsersDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);
    createUserDto.password = hashedPassword;

    if (createUserDto.role === Role.ADMIN) {
      newUser = this.usersRepository.create({
        ...createUserDto,
        verified: true,
        subscribed: true,
      });
    } else {
      newUser = this.usersRepository.create(createUserDto);
    }

    await this.usersRepository.save(newUser);
  }

  async signIn(signInDto: SignInDto): Promise<string> {
    const { email, username, password } = signInDto;

    const user = await this.usersRepository
      .createQueryBuilder('users')
      .where('users.email = :email', { email })
      .orWhere('users.username = :username', { username })
      .getOne();

    console.log(user);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log(isMatch);
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = await this.jwt.generateToken({ userId: user.id }, '1d');
    return token;
  }
}
