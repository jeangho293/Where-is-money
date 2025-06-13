import { DddService } from '../ddd/service';

export function Transactional() {
  return function (this: DddService, propertyKey: PropertyKey, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (this: DddService, ...args: any[]) {
      const result = await originalMethod.apply(this, args);

      return result;
    };
    return descriptor;
  };
}
