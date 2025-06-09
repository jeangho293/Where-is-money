import { Controller, Get } from '@nestjs/common';

@Controller('/admins')
export class AdminsUsersController {
  @Get('/users')
  hi() {
    return 'hi';
  }
}
