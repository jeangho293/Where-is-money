import { Injectable } from '@nestjs/common';
import { UsersRepository } from '../infrastructure/users.repository';
import { User } from '../domain/users.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async list() {
    const users = await this.usersRepository.find();

    return users;
  }

  async create({ email }: { email: string }) {
    const user = new User({ email });
    await this.usersRepository.save([user]);
  }
}
