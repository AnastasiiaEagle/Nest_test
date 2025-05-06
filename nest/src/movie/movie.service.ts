import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie, MoviePoster } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieDto } from './dto/movie.dto';

@Injectable()
export class MovieService {
    constructor (private readonly prismaService: PrismaService){}

    async finfAll(){
        return await this.prismaService.movie.findMany({
            where: {
                isAvailable: true
            },
            orderBy: {
                createdAt: 'desc'
            },
            select:{
                id: true,
                title: true,
                actors: {
                    select: {
                        id: true,
                        name: true,
                    }
                    
                }
            }
            
        })
    }

    async findById(id: string): Promise<Movie>{
        const movie = await this.prismaService.movie.findUnique({
            where: {
                id,
            },
            include: {
                actors: true,
                poster: true,
                reviews: true
            }
        });

        if (!movie || !movie.isAvailable) throw new NotFoundException('Нічого не знайдено');

        return movie
    }

    async create(dto: MovieDto): Promise<Movie>{
        const {title, releaseYear, actorIds, imageUrl} = dto

        const actors =  await this.prismaService.actor.findMany({
            where:{
                id: {in:actorIds}
            }
        })

        if(!actors || !actors.length) throw new NotFoundException("Один чи декілька акторів не знайдено")
        
        const movie = await this.prismaService.movie.create({
            data: {
                title,
                releaseYear,
                poster: imageUrl 
                    ? {
                        create: {
                            url: imageUrl
                        }
                    } : undefined,
                actors: {
                    connect: actors.map((actor) => ({
                        id: actor.id
                    }))
                },
            },
        })

        return await movie;
    }

    async update(id: string, dto: MovieDto): Promise<boolean> {
        const movie = await this.findById(id);

        Object.assign(movie, dto);

        const actors =  await this.prismaService.actor.findMany({
            where:{
                id: {in: dto.actorIds}
            }
        })
        
        await this.prismaService.movie.update({
            where: {
                id: movie.id
            },
            data: {
                title: dto.title,
                releaseYear: dto.releaseYear,
                poster: dto.imageUrl 
                    ? {
                        create: {
                            url: dto.imageUrl
                        }
                    } : undefined,
                actors: {
                    connect: actors.map((actor) => ({
                        id: actor.id
                    }))
                },
            }
        });
        return true;
    }

    async delete(id: string): Promise<string>{
        const movie = await this.findById(id)

        await this.prismaService.movie.delete({
            where: {
                id
            }
        })

        return movie.id
    }

}
