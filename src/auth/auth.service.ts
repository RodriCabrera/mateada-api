import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginRequestDto, RegisterRequestDto } from './auth.dto';
import { AccessToken } from './auth.types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login({ username, password }: LoginRequestDto): Promise<AccessToken> {
    const user = await this.usersService.findOne(username);
    if (!user) {
      throw new BadRequestException();
    }

    // TODO: Implement password hashing
    // const isPassMatch: boolean = bcrypt.compareSync(password, user.password);
    const isPassMatch = password === user.password;
    if (!isPassMatch) {
      throw new BadRequestException('Password does not match');
    }

    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async register(user: RegisterRequestDto): Promise<AccessToken> {
    const existingUser = await this.usersService.findOne(user.username);
    if (existingUser) {
      throw new BadRequestException('User already exists');
    }

    // TODO: Implement password hashing
    // const hashedPassword = await bcrypt.hash(user.password, 10);
    // const newUser = { ...user, password: hashedPassword };

    await this.usersService.create(user);

    return this.login(user);
  }
}
