import { IsArray, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, IsUrl, IsUUID, Length, Matches, MaxLength, MinLength } from "class-validator";
import { StartWith } from "../decorators/starts-with.decorator";

export enum TaskTag {
    WORK = 'work',
    STUDY = 'study',
    HOME = 'home',
}

export class CreateTaskDto{
    @IsString() // вказуємо що то строка
    @IsNotEmpty() // Не може бути пустим
    // @MinLength(10) // Мінімальна строка
    // @MaxLength(100)
    @Length( 2, 100) // Довжина
    @StartWith('Task:')//Кастомний декоратор
    title: string;

    @IsString()
    @IsOptional() // не обов'язкове поле
    description: string;

    // @IsNumber({}, {message: "Це має бути число"})
    @IsInt({message: "Це має бути цілим число"})
    @IsPositive({message: "Має бути додатнім"})
    @IsOptional()
    priority: number;

    @IsArray({message: "Теги мають бути масивом"})
    // @IsString({each: true, message:"Кожен тег має бути строкою"})// Усі рядки масиву строки
    @IsEnum(TaskTag, {message: "Недопустиме значення тегу"})
    @IsOptional()
    tags: string[]

    // @Matches(/^(?=.*[A-Z])(?=.*[0-9]).+$/, {message: "Пароль має мати хочаб 1 букву чи цифру"})
    // @IsString({message: "Пароль має бути строкою"})
    // @MinLength(6, {message: "Пароль має бути мінімум з 6 символів"})
    // password: string;

    // @IsUrl({protocols: ['http', 'https'], require_protocol: true, require_port: false, /*host_whitelist: ['']*, host_blacklist: ['']*/}, {message: "Некоректний формат url"})
    // websiteUrl: string;

    // @IsUUID('4', {message: "некоректний формат UUID"})
    // userId: string;
}

