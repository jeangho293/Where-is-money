import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UUIDMiddleware, ContextMiddleware } from '@middlewares';
import { ConfigsModule } from '@configs';
import { DatabasesModule } from './databases';
import { AdminsModule } from './services/admins.module';
import { ContextModule } from '@libs/async-context';

@Module({
  imports: [ConfigsModule, DatabasesModule, ContextModule, AdminsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContextMiddleware, UUIDMiddleware).forRoutes('*');
  }
}
