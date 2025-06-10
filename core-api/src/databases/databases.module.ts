import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigsService } from '@configs';
import entities from './entities';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigsService],
      useFactory: (config: ConfigsService) => {
        return {
          ...config.mysql,
          synchronize: true,
          entities,
        };
      },
    }),
  ],
})
export class DatabasesModule implements OnModuleInit {
  constructor(private readonly datasource: DataSource) {}

  onModuleInit() {
    if (this.datasource.isInitialized) {
      console.log('Mysql is connected.');
    } else {
      throw new Error('Database cannot start.');
    }
  }
}
