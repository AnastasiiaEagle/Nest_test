import { IsInt, IsNotEmpty, IsString, Min, Max, IsArray, IsUUID } from "class-validator";

export class MovieDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1888)
    @Max(new Date().getFullYear())
    releaseYear: number;

    @IsString()
    imageUrl: string;

    @IsArray()
    @IsUUID('4', 
        {each: true}// усі елементи масива в цьому форматі
    )
    actorIds: string[];
}