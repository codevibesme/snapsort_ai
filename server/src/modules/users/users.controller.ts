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
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConflictResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { CreateUserDto } from './users.dto';
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
  @ApiNotFoundResponse({ description: 'Missing Fields' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async register(
    @Req() req: Request,
    @Res() res: Response,
    @Body() createUserDto: CreateUserDto,
  ) {
    const { email, username, phone, name, password } = createUserDto;
    if (!email || !username || !phone || !name || !password) {
      throw new NotFoundException('Missing fields');
    }

    try {
      await this.usersService.register(createUserDto);
      return res.status(200).json('User registered successfully');
    } catch (error) {
      throw error;
    }
  }
}
