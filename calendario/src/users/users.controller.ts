import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from 'src/guards/api-key.guard';
import { UsersService } from './users.service';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';

@UseGuards(ApiKeyGuard)
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Post()
    async createUser(@Body() createUserDto: createUserDto){
        return this.usersService.createUser(createUserDto);
    }

    @Get(':email')
    async getUserByEmail(@Param() email: string){
        return this.usersService.getUserByEmail(email);
    }

    @Delete(':email')
    async deleteUser(@Param() email: string){
        console.log(`Email: ${email}`)
        return this.usersService.deleUserByEmail(email)
    }

    @Patch(':email')
    async updateUser(
        @Param() email: string,
        @Body() updateUserDto: updateUserDto
    ){
        return this.usersService.updateUser(email, updateUserDto)
    }
}   
