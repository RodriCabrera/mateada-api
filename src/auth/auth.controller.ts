import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './constants';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
