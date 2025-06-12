import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigsModule } from '@configs';
import { DatabasesModule } from '@databases';
import { GlobalServiceModule } from './services/global-service.module';
import { ContextInjectMiddleware, UUIDMiddlewares } from '@middlewares';
import { ContextModule } from '@libs/context';

@Module({
  imports: [ContextModule, ConfigsModule, DatabasesModule, GlobalServiceModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ContextInjectMiddleware, UUIDMiddlewares).forRoutes('*');
  }
}
