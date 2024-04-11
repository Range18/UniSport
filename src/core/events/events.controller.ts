import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { GetEventRdo } from '#src/core/events/rdo/get-event.rdo';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('Events')
@Controller('api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return new GetEventRdo(await this.eventsService.save(createEventDto));
  }

  @ApiQuery({ name: 'category', type: String })
  @Get()
  async findAll(@Query('category') category: string) {
    const events = await this.eventsService.find({
      where: { category: { name: category ? category : undefined } },
    });

    return events.map((event) => new GetEventRdo(event));
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return new GetEventRdo(await this.eventsService.findOne({ where: { id } }));
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return new GetEventRdo(
      await this.eventsService.updateOne({ where: { id } }, updateEventDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.eventsService.remove({ where: { id } });
  }
}
