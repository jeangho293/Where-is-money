import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../../../services/users/application/users.service';

@Controller('/admins')
export class AdminsUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/users')
  hi() {
    return 'hi';
  }

  @Post('/users')
  async create(@Body() body) {
    await this.usersService.create();
  }
}
