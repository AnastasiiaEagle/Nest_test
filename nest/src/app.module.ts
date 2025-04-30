import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MovieModule } from './movie/movie.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({

  controllers: [AppController],
  providers: [AppService],
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 1000,
    username:'postgres',
    password: '5432',
    database: 'nest_test',
    autoLoadEntities: true,
    synchronize: true,
  }), TasksModule, MovieModule],
})
export class AppModule {}
