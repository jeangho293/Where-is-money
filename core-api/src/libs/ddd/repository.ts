import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntityManager, ObjectType } from 'typeorm';
import { DddAggregate } from './aggregate';
import { Context, ContextKey } from '../context';

export abstract class DddRepository<T extends DddAggregate> {
  constructor(
    @InjectDataSource() private datasource: DataSource,
    private readonly context: Context
  ) {}

  abstract entityClass: ObjectType<T>;

  get entityManager(): EntityManager {
    return this.datasource.manager;
  }

  async save(entities: T[]) {
    const txId = this.getTxId();

    entities.forEach((entity) => entity.setTxId(txId));
    await this.entityManager.save(entities);
  }

  private getTxId() {
    return this.context.get<string>(ContextKey.TXID);
  }
}
