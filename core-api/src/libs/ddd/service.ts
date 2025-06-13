import { Inject } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Context } from '../context';

export abstract class DddService {
  @InjectEntityManager()
  private readonly entityManager: EntityManager;

  @Inject()
  context: Context;
}
