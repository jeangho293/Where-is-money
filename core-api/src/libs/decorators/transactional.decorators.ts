import { ContextKey } from '../async-context';
import { DddService } from '../ddd/ddd-service';
import { EntityManager } from 'typeorm';

export function Transactional() {
  return function (service: DddService, propertyKey: PropertyKey, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (this: DddService, ...args: any[]) {
      let result: any;
      const entityManager: EntityManager = Reflect.get(this, 'entityManager');

      await entityManager.transaction(async (transactionalManager) => {
        this.context.set(ContextKey.EntityManager, transactionalManager);
        result = await originalMethod.apply(this, args);
        this.context.set(ContextKey.EntityManager, entityManager);
      });

      return result;
    };
  };
}
