import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MovieEntity } from './entity/movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from 'src/actor/entity/actor.entity';
import { MoviePosterEntity } from './entity/poster.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MovieEntity, ActorEntity, MoviePosterEntity])],
  controllers: [MovieController],
  providers: [MovieService],
  exports: [MovieService], //Дає можливість управляти модулями з інших частин
})
export class MovieModule {}
