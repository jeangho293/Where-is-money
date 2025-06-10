import { Module } from '@nestjs/common';
import { AdminsUsersController } from '@routes/admins';
import { UsersService } from './application/users.service';
import { GeneralsUsersController } from '@routes/generals';
import { UsersRepository } from './infrastructure/users.repository';

@Module({
  controllers: [AdminsUsersController, GeneralsUsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
