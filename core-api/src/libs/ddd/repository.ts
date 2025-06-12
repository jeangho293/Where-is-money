import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntityManager, ObjectType } from 'typeorm';

export abstract class DddRepository<T> {
  constructor(@InjectDataSource() private datasource: DataSource) {}

  abstract entityClass: ObjectType<T>;

  get entityManager(): EntityManager {
    return this.datasource.manager;
  }

  async save(entities: T[]) {
    await this.entityManager.save(entities);
  }
}
