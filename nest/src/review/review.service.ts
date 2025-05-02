import { Injectable } from '@nestjs/common';
import { ReviewEntity } from './entity/review.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewDto } from './dto/rewiev.dto';
import { MovieService } from 'src/movie/movie.service';

@Injectable()
export class ReviewService {
    constructor(@InjectRepository(ReviewEntity) 
    private readonly reviewRepository: Repository<ReviewEntity>,
    private readonly movieService: MovieService,
){}

    async create(dto: ReviewDto): Promise<ReviewEntity>{
        const {text, rating, movieId} = dto;
        const movie = await this.movieService.findById(movieId);

        const review = this.reviewRepository.create({
            text,
            rating,
            movie,
        })
        return await this.reviewRepository.save(review);
    }
}
