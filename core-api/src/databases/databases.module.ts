import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigsService } from '@configs';
import entities from './entities';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [ConfigsService],
      useFactory: (configs: ConfigsService) => {
        return {
          ...configs.mysql,
          synchronize: true,
          entities,
        };
      },
    }),
  ],
})
export class DatabasesModule {}
