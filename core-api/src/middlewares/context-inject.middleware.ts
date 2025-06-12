import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { Context } from '@libs/context';

@Injectable()
export class ContextInjectMiddleware implements NestMiddleware {
  constructor(private readonly context: Context) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.context.start();
    next();
  }
}
