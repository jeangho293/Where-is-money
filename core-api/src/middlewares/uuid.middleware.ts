import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { v4 as uuid } from 'uuid';
import { Context, ContextKey } from '@libs/context';

@Injectable()
export class UUIDMiddlewares implements NestMiddleware {
  constructor(private readonly context: Context) {}

  use(req: Request, res: Response, next: NextFunction) {
    const txId = req.get('x-request-id') || uuid();

    res.locals.txId = txId;
    this.context.set(ContextKey.TXID, txId);
    next();
  }
}
