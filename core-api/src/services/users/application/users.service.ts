import { Injectable } from '@nestjs/common';
import { DddService } from '@libs/ddd';
import { UsersRepository } from '../infrastructure/users.repository';
import { User } from '../domain/users.entity';
import { Transactional } from '@libs/decorators';

@Injectable()
export class UsersService extends DddService {
  constructor(private readonly usersRepository: UsersRepository) {
    super();
  }

  @Transactional()
  async create() {
    const user = new User({ email: 'test' });

    await this.usersRepository.save([user]);
  }
}
