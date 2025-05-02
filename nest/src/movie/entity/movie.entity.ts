import { ActorEntity } from "src/actor/entity/actor.entity";
import { ReviewEntity } from "src/review/entity/review.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { MoviePosterEntity } from "./poster.entity";


export enum Genre {
    ACTION = 'action',
    COMEDY = 'comedy',
    DRAMA = 'drama',
    HORROR = 'horror'
}

@Entity({name: 'movies'})
export class MovieEntity {
    @PrimaryGeneratedColumn('uuid') // Генерація унікальних значень
    // @PrimaryColumn() //Ключ без автоінкрімента
    // @Generated('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 128,
    }
    )
    title: string;

    @Column({
        type: 'text',
        nullable: true  //поле буде необов'язковим
    })
    description: string;
    
    @Column({
        name: 'release_year',
        type: 'int',
        unsigned: true, //тільки додатні
    })
    releaseYear: number;

    @Column({
        type: 'decimal',
        precision: 3, // кількість чисел
        scale: 1, //кількість чисел після коми
        default: 0.0
    })
    rating: number;

    @Column({
        type: 'enum',
        enum: Genre,
        default: Genre.DRAMA
    })
    genre: Genre;

    @Column( {
        name: 'poster_id',
        type: 'uuid',
        nullable: true
    })
    posterId:string

    @OneToOne(() => MoviePosterEntity, (poster) => poster.movie, {
        onDelete: 'CASCADE',
        nullable: true
    })
    @JoinColumn(
        {name:'poster_id'}
    )
    poster: MoviePosterEntity | null

    @OneToMany(() => ReviewEntity, (review) => review.movie)
    reviews: ReviewEntity[]

    @ManyToMany(()=> ActorEntity, actore => actore.movies)
    @JoinTable({
        name: 'movie_actors',
        joinColumn:{
            name: 'movie_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'actore_id',
            referencedColumnName: 'id'
        }
    })
    actors: ActorEntity[]

    @Column({
        name: 'is_available',
        type: 'boolean',
        default: false
    })
    isAvailable: boolean;

    @Column({
        type: 'date',
        nullable: true
    })
    releaseDate: string;

    @CreateDateColumn({
        name:'created_at'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name:'updated_at'
    })
    updatedAt:Date;
}