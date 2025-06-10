import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntityManager, ObjectType } from 'typeorm';
import { DddAggregate } from './ddd-aggregate';
import { Context, ContextKey } from '../async-context';

export abstract class DddRepository<T extends DddAggregate> {
  constructor(
    @InjectDataSource() private datasource: DataSource,
    private readonly context: Context
  ) {}

  abstract entityClass: ObjectType<T>;

  get entityManager(): EntityManager {
    return this.context.get(ContextKey.EntityManager) || this.datasource.manager;
  }

  async save(entities: T[]) {
    const txId = this.context.get<string>(ContextKey.TxId);
    entities.forEach((entity) => entity.setTxId(txId));

    await this.entityManager.save(entities);
  }
}
