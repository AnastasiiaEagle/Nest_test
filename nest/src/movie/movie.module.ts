import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService], //Дає можливість управляти модулями з інших частин
})
export class MovieModule {}
