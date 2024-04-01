import {
  BadRequestException,
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
import { MailHelpersService } from '../helpers/mail.helpers.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
    private readonly jwt: JwtHelpersService,
    private readonly mailer: MailHelpersService,
  ) { }

  async register(createUserDto: CreateUserDto): Promise<UsersDto> {
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
        isVerified: true,
        isSubscribed: true,
      });
    } else {
      newUser = this.usersRepository.create(createUserDto);
    }

    return await this.usersRepository.save(newUser);
  }

  async signIn(signInDto: SignInDto): Promise<string> {
    const { email, username, password } = signInDto;

    const user = await this.usersRepository
      .createQueryBuilder('users')
      .where('users.email = :email', { email })
      .orWhere('users.username = :username', { username })
      .getOne();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return await this.jwt.generateToken({ userId: user.id }, '1d');
  }

  async verifyUser(token: string): Promise<void> {
    const decodedToken = await this.jwt.verifyToken(token, 'email');
    if (!decodedToken) {
      throw new UnauthorizedException('Failed to verify email');
    }
    const user = await this.usersRepository.findOne({ where: { email: decodedToken.email } });
    if (user.isVerified) {
      throw new ConflictException('Email already verified');
    }

    if (!user) {
      throw new NotFoundException('User not found');
    }

    await this.usersRepository.update({ email: decodedToken.email }, { isVerified: true });
  }

  async generateVerificationEmail(id: number): Promise<string> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.isVerified) {
      throw new ConflictException('Email already verified');
    }

    const code = await this.jwt.generateToken({ email: user.email }, '5m');
    if (!code) {
      throw new BadRequestException('Failed to generate verification code');
    }

    await this.mailer.sendVerificationEmail(user.email, `${process.env.FRONTEND_URL}/verify-user/${code}`);
    return `${process.env.FRONTEND_URL}/verify-user/${code}`;
  }
}
