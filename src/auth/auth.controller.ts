import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  Req,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { LoginRequestDto } from './auth.dto';
import { Response } from 'express';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('register')
  signUp(@Body() registerDto: LoginRequestDto) {
    return this.authService.register(registerDto);
  }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  async login(@Body() loginDto: LoginRequestDto, @Res() res: Response) {
    const { access_token } = await this.authService.login(loginDto);
    res
      .cookie('access_token', access_token, {
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
        expires: new Date(Date.now() + 1 * 24 * 60 * 1000),
      })
      .send({ status: 'Logged in' });
  }

  @Get('profile')
  getProfile(@Req() req) {
    return req.user;
  }

  @Post('logout')
  logOut(@Body() loginDto: LoginRequestDto, @Res() res: Response) {
    this.authService.logout(loginDto);
    res.clearCookie('access_token').send({ status: 'Logged out' });
  }
}
