import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../../../services/users/application/users.service';

@Controller('/admins/users')
export class AdminsUsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async list() {
    const data = await this.usersService.list();

    return data;
  }

  @Post()
  async create(@Body() body: { email: string }) {
    const { email } = body;

    await this.usersService.create({ email });
  }
}
