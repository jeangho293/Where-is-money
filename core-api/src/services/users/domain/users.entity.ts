import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DddAggregate } from '@libs/ddd';

type Creator = {
  email: string;
};

@Entity()
export class User extends DddAggregate {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  constructor(args: Creator) {
    super();

    if (args) {
      this.email = args.email;
    }
  }
}
