import { IsBoolean, IsNotEmpty, IsString, Length, MaxLength, MinLength } from "class-validator";

export class UpdateeTaskDto{
    @IsString({message: 'Назва має бути рядком'}) // вказуємо що то строка
    @IsNotEmpty({message: 'Назва не може бути порожньою'}) // Не може бути пустим
    // @MinLength(10) // Мінімальна строка
    // @MaxLength(100)
    @Length( 2, 100, {message: 'Назва може бути від 2 до 100 символів'}) // Довжина
    title: string;

    @IsBoolean({message: "Статус має бути булевим виразом"})
    isCompleted: boolean;
}