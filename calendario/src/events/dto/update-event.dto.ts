import { Type } from "class-transformer" //https://www.npmjs.com/package/@nestjs/class-transformer
import { IsString, IsOptional, IsDate } from "class-validator"; // https://docs.nestjs.com/techniques/validation

export class updateEventDto{
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsDate()
    @Type(() => Date)
    startTime: Date;

    @IsDate()
    @Type(() => Date)
    endTime: Date;
}