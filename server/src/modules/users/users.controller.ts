import { Controller, Get, Post, Body, Req, Res, Query, Param, ParseIntPipe, BadRequestException } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiBadRequestResponse, ApiBody, ApiConflictResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery, ApiRequestTimeoutResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { CreateUserDto, SignInDto } from './users.dto';
import { Request, Response } from 'express';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

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
  @ApiQuery({ name: 'password', type: String, description: 'Password' })
  @ApiOkResponse({ description: 'Token' })
  @ApiUnauthorizedResponse({ description: 'Invalid credentials' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async signIn(
    @Req() req: Request,
    @Res() res: Response,
    @Query() signInDto: SignInDto,
  ) {
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

  @Get('/send-verification-email/:id')
  @ApiOperation({ summary: 'Sends verification email to an user' })
  @ApiParam({ name: 'id', type: Number, description: 'User ID' })
  @ApiOkResponse({ description: 'Verification email sent successfully' })
  @ApiConflictResponse({ description: 'User already verified' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async sendVerificationEmail(
    @Req() req: Request,
    @Res() res: Response,
    @Param('id', ParseIntPipe) id: number,
  ) {
    if (!id) {
      throw new BadRequestException('User ID required');
    }

    try {
      const link = await this.usersService.generateVerificationEmail(id);
      return res.status(200).send(link);
    } catch (error) {
      throw error;
    }
  }

  @Get('/verify/:token')
  @ApiOperation({ summary: 'Verifies User' })
  @ApiParam({ name: 'token', type: String, description: 'Verification Token' })
  @ApiOkResponse({ description: 'User verified successfully' })
  @ApiConflictResponse({ description: 'User already verified' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiRequestTimeoutResponse({ description: 'Token has expired' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  async verifyUser(
    @Req() req: Request,
    @Res() res: Response,
    @Param('token') token: string,
  ) {
    if (!token) {
      throw new BadRequestException('Verification token is missing');
    }

    try {
      await this.usersService.verifyUser(token);
      return res.status(200).send('User verified successfully');
    } catch (error) {
      throw error;
    }
  }
}
