import { Type } from "class-transformer" //https://www.npmjs.com/package/@nestjs/class-transformer
import { IsString } from "class-validator"; // https://docs.nestjs.com/techniques/validation

export class createUserDto{
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    email: string;
}