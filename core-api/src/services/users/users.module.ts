import { Module } from '@nestjs/common';
import { UsersService } from './application/users.service';
import { AdminsUsersController } from '@routes/admins';
import { UsersRepository } from './infrastructure/users.repository';

@Module({
  controllers: [AdminsUsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
