import { Module } from '@nestjs/common';
import { ConfigsModule } from '@configs';
import { DatabasesModule } from '@databases';
import { GlobalServiceModule } from './services/global-service.module';

@Module({
  imports: [ConfigsModule, DatabasesModule, GlobalServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
