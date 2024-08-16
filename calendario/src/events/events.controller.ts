import { Body, Controller, DefaultValuePipe, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { get } from 'http';
import { EventsService } from './events.service';
import { createEventDto } from './dto/create-event.dto';
import { updateEventDto } from './dto/update-event.dto'
import { ApiKeyGuard } from 'src/guards/api-key.guard';

@UseGuards(ApiKeyGuard)
@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) {}
    @Post()
    async createEvent(@Body() createEventDto: createEventDto){
        return this.eventsService.createEvent(createEventDto);
    }

    @Get(':id')
    async findEventById(@Param() id: string){
        console.log(`ID: ${id}`)
        return this.eventsService.findEventById(id)
    }

    @Get('list')
    async listEvents(
        @Query('afterDate') afterDate: String,
        @Query('beforeDate') beforeDate: String,
        @Query('sort') sort: 'asc' | 'desc' = 'desc',
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    ){
        console.log(
            `Sort: ${sort},
            Limit: ${limit},
            afterDate ${afterDate}
            beforeDate ${beforeDate}`
        )
        return 'list of events'
    }

    @Delete(':id')
    async deleteEvent(@Param() id: string){
        console.log(`ID: ${id}`)
        return this.eventsService.deleEventById(id)
    }

    @Patch(':id')
    async updateEvent(
        @Param() id: string,
        @Body() updateEventDto: updateEventDto
    ){
        return this.eventsService.updateEvent(id, updateEventDto)
    }
}
