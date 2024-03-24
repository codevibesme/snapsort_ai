import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtHelpersService } from './jwt.helpers.service';
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [],
  providers: [JwtHelpersService],
  exports: [JwtHelpersService],
})
export default class JWTHelpersModule {}
