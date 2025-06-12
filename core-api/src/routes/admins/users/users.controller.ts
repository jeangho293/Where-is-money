import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../../../services/users/application/users.service';

@Controller('/admins/users')
export class AdminsUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async list() {}
}
