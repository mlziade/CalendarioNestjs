import { Injectable } from '@nestjs/common';
import { createEventDto } from './dto/create-event.dto';
import { randomUUID } from 'crypto';
import { Event } from './entity/event.entity'
import { error } from 'console';
import { updateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
    private events: Event[] = [];

    async createEvent(createEventDto: createEventDto): Promise<Event>{
        const newEvent: Event = {
            ...createEventDto,
            id: randomUUID()
        }
        this.events.push(newEvent)

        return newEvent
    }

    async deleEventById(id: string){
        const index: number =  this.events.findIndex((event) => event.id == id)
        if (index == -1){
            return 'no event with this id' 
        }
        return this.events.splice(index, 1)[0]
    }

    async findEventById(id: string){
        const index: number = this.events.findIndex((event) => event.id == id)
        if (index == -1){
            return 'no event with this id' 
        }
        return this.events[index]
    }

    async updateEvent(id: string, updateEventDto: updateEventDto){
        const index: number = this.events.findIndex((event) => event.id == id)
        if (index == -1){
            return 'no event with this id' 
        }
        
        if(updateEventDto.name){this.events[index].name = updateEventDto.name}
        if(updateEventDto.description){this.events[index].description = updateEventDto.description}
        if(updateEventDto.startTime){this.events[index].startTime = updateEventDto.startTime}
        if(updateEventDto.endTime){this.events[index].endTime = updateEventDto.endTime}

        return this.events[index]
    }

}
