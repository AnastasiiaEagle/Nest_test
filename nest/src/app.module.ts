import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
// import { LoggingModdleware } from './common/middlewares/logger.middleware';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), PrismaModule],
})
export class AppModule {}
// export class AppModule implements NestModule{
//   configure(consumer: MiddlewareConsumer) {
//     // consumer.apply(LoggingModdleware).forRoutes('*')
//     consumer
//       .apply(LoggingModdleware)
//       .forRoutes({
//         path: '/movies',
//         method: RequestMethod.POST
//       })
//   }
// }
