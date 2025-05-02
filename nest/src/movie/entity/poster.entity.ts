import { ActorEntity } from "src/actor/entity/actor.entity";
import { ReviewEntity } from "src/review/entity/review.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MovieEntity } from "./movie.entity";

@Entity({name: 'movie_posters'})
export class MoviePosterEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type:'varchar',
        length: 255
    })
    imageUrl: string;

    @OneToOne(() => MovieEntity, movie => movie.poster)
    movie: MovieEntity

    @CreateDateColumn({
        name:'created_at'
    })
    createdAt: Date;
}