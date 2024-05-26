import { IsEmail, IsString, IsStrongPassword } from 'class-validator';

export class RegisterRequestDto {
  @IsString()
  username: string;
  @IsStrongPassword()
  password: string;
  @IsEmail()
  email: string;
}

export class LoginRequestDto extends RegisterRequestDto {}
