import { Module } from '@nestjs/common';
import { AdminsUsersController } from '../../routes/admins/users/users.controller';

@Module({
  controllers: [AdminsUsersController],
})
export class UsersModule {}
