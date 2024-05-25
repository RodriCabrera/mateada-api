import { Injectable } from '@nestjs/common';

// TODO: This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
  // TODO: MOVE USERS TO DB
  private readonly users = [
    {
      userId: 1,
      username: 'rodrigo',
      password: 'cabrera',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'rey',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
