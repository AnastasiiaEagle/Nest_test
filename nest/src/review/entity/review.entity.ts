import { MovieEntity } from "src/movie/entity/movie.entity";
import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'reviews'})
export class ReviewEntity {
    @PrimaryGeneratedColumn('uuid') // Генерація унікальних значень
    // @PrimaryColumn() //Ключ без автоінкрімента
    // @Generated('uuid')
    id: string;

    @Column({
        type: 'text',
    })
    text: string;

    @Column({
        type: 'decimal',
        precision: 3, // кількість чисел
        scale: 1, //кількість чисел після коми
        default: 0.0
    })
    rating: number;

    @Column({
        name: 'movie_id',
        type: 'uuid'
    })
    movieId:string

    @ManyToOne(()=> MovieEntity, movie => movie.reviews, {
        onDelete: 'CASCADE',
    })
    @JoinColumn({
        name: 'movie_id'
    })
    movie: MovieEntity;

    @CreateDateColumn({
        name:'created_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name:'updated_at'
    })
    updatedAt:Date;
}