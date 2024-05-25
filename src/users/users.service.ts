import { Injectable } from '@nestjs/common';
import { User } from './user.schema';

@Injectable()
export class UsersService {
  // TODO: MOVE USERS TO MongoDB
  private readonly users: User[] = [
    {
      userId: 1,
      username: 'rodrigo',
      password: 'cabrera',
      email: 'rodrigo@gmail.com',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'rey',
      email: 'maria@gmail.com',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async create(user: Omit<User, 'userId'>) {
    this.users.push({ ...user, userId: this.users.length + 1 });
  }
}
