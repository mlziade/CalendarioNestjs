import { Type } from "class-transformer" //https://www.npmjs.com/package/@nestjs/class-transformer
import { IsString, IsOptional } from "class-validator"; // https://docs.nestjs.com/techniques/validation

export class updateUserDto{
    @IsString()
    @IsOptional()
    firstName?: string;

    @IsString()
    @IsOptional()
    lastName?: string;

    @IsString()
    @IsOptional()
    email?: string;

}