import { Controller, Get } from '@nestjs/common';

@Controller('/generals')
export class GeneralsUsersController {
  constructor() {}

  @Get('/bye')
  bye() {}
}
