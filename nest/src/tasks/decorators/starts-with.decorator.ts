import { registerDecorator, ValidationOptions, type ValidationArguments } from "class-validator";

export function StartWith(
    prefix: string,
    validationOptions?: ValidationOptions,
){
    return (object: Object, propertyName: string) =>{
        registerDecorator({
            name: 'startsWith',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return typeof value === 'string' && value.startsWith(prefix);
                },
                defaultMessage(args: ValidationArguments){
                    return `Назва має починатись з "${prefix}`;
                }
            },
        });
    }
}