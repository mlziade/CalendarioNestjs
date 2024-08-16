import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class UsersService {
    private users: User[] = [];

    async createUser(createUserDto: createUserDto): Promise<User>{
        const newUser: User = {
            ...createUserDto,
        }
        this.users.push(newUser)

        return newUser
    }

    async getUserByEmail(email: string){
        const index: number = this.users.findIndex((user) => user.email == email)
        if (index == -1){
            return 'no user with this email' 
        }
        return this.users[index]
    }

    async deleUserByEmail(email: string){
        const index: number = this.users.findIndex((user) => user.email == email)
        if (index == -1){
            return 'no user with this email' 
        }
        return this.users.splice(index, 1)[0]
    }

    async updateUser(email: string, updateUserDto: updateUserDto){
        const index: number = this.users.findIndex((user) => user.email == email)
        if (index == -1){
            return 'no user with this email' 
        }
        
        if(updateUserDto.firstName){this.users[index].firstName = updateUserDto.firstName}
        if(updateUserDto.lastName){this.users[index].lastName = updateUserDto.lastName}
        if(updateUserDto.email){this.users[index].email = updateUserDto.email}

        return this.users[index]
    }

}
