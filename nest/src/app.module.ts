import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { MovieModule } from './movie/movie.module';

@Module({

  controllers: [AppController],
  providers: [AppService],
  imports: [TasksModule, MovieModule],
})
export class AppModule {}
