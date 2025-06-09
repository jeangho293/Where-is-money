import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DddAggregate } from '@libs/ddd';
import { customAlphabet } from 'nanoid';

@Entity()
export class User extends DddAggregate {
  @PrimaryGeneratedColumn()
  id!: string;

  constructor() {
    super();

    this.id = customAlphabet(
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
      10
    )();
  }
}
