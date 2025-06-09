import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { UUIDMiddleware } from '@middlewares';
import { ConfigsModule } from '@configs';

@Module({
  imports: [ConfigsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UUIDMiddleware).forRoutes('*');
  }
}
