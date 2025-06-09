import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DddAggregate } from '@libs/ddd';
import { createNanoId } from '@libs/common';

type Creator = {
  email: string;
};

@Entity()
export class User extends DddAggregate {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  email!: string;

  constructor(args: Creator) {
    super();

    if (args) {
      this.id = createNanoId();
      this.email = args.email;
    }
  }
}
