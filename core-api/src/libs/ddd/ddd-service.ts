import { Inject } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Context } from '../async-context';

export abstract class DddService {
  @Inject()
  context: Context;

  @InjectEntityManager()
  private entityManager: EntityManager;
}
