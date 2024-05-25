import { IsEmail } from 'class-validator';

export class RegisterRequestDto {
  username: string;
  password: string;
  @IsEmail()
  email: string;
}

export class LoginRequestDto extends RegisterRequestDto {}
