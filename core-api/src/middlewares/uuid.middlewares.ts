import { Injectable, NestMiddleware } from '@nestjs/common';
import type { Request, Response, NextFunction } from 'express';
import { v4 as uuid } from 'uuid';
import { Context, ContextKey } from '@libs/async-context';

@Injectable()
export class UUIDMiddleware implements NestMiddleware {
  constructor(private readonly context: Context) {}

  use(req: Request, res: Response, next: NextFunction) {
    const txId = req.get('x-request-id') || uuid();

    res.locals.txId = txId;
    this.context.set(ContextKey.TxId, txId);
    next();
  }
}
