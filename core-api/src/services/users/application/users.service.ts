import { Injectable } from '@nestjs/common';
import { DddService } from '@libs/ddd';

@Injectable()
export class UsersService extends DddService {}
