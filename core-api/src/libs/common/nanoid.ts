import { customAlphabet } from 'nanoid';

export function createNanoId() {
  return customAlphabet('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', 10)();
}
