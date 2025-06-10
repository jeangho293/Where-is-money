import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { Context } from '@libs/async-context';

@Injectable()
export class ContextMiddleware implements NestMiddleware {
  constructor(private context: Context) {}
  use(req: Request, res: Response, next: NextFunction) {
    this.context.start();
    next();
  }
}
