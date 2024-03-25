import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  NotFoundException,
  BadRequestException,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { CreateUserDto, SignInDto } from './users.dto';
import { Request, Response } from 'express';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Registers an user' })
  @ApiBody({ type: CreateUserDto })
  @ApiOkResponse({ description: 'User registered successfully' })
  @ApiConflictResponse({ description: 'Email / Username already exists' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async register(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createUserDto: CreateUserDto,
  ) {
    const { email, username, phone, name, password } = createUserDto;
    if (!email || !username || !phone || !name || !password) {
      throw new BadRequestException('Missing fields');
    }

    try {
      await this.usersService.register(createUserDto);
      return res.status(200).send('User registered successfully');
    } catch (error) {
      throw error;
    }
  }

  @Get()
  @ApiOperation({ summary: 'Signs in an user' })
  @ApiQuery({ name: 'email', type: String, description: 'Email' })
  @ApiQuery({ name: 'username', type: String, description: 'Username' })
  @ApiQuery({ name: 'password', type: String, description: 'password' })
  @ApiOkResponse({ description: 'Token' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async signIn(
    @Req() req: Request,
    @Res() res: Response,
    @Query() signInDto: SignInDto,
  ) {
    console.log(signInDto)
    const { email, username, password } = signInDto;
    if (!email && !username) {
      throw new BadRequestException('Username or Email required');
    }

    if (!password) {
      throw new BadRequestException('Password required');
    }
    
    try {
      const token = await this.usersService.signIn(signInDto);
      return res.status(200).send(token);
    } catch (error) {
      throw error;
    }
  }
}
