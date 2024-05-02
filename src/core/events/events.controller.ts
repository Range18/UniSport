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
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Events')
@Controller('api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @ApiCreatedResponse({ type: GetEventRdo })
  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return new GetEventRdo(
      await this.eventsService.save({
        ...createEventDto,
        category: { id: createEventDto.category },
      }),
    );
  }

  @ApiOkResponse({ type: [GetEventRdo] })
  @ApiQuery({ name: 'category', type: String })
  @Get()
  async findAll(@Query('category') category: string) {
    const events = await this.eventsService.find({
      where: { category: { name: category ? category : undefined } },
      relations: { category: true, image: true },
    });

    return events.map((event) => new GetEventRdo(event));
  }

  @ApiOkResponse({ type: GetEventRdo })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return new GetEventRdo(
      await this.eventsService.findOne({
        where: { id },
        relations: { category: true, image: true },
      }),
    );
  }

  @ApiOkResponse({ type: GetEventRdo })
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEventDto: UpdateEventDto,
  ) {
    return new GetEventRdo(
      await this.eventsService.updateOne(
        { where: { id }, relations: { category: true } },
        { ...updateEventDto, category: { id: updateEventDto.category } },
      ),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.eventsService.remove({ where: { id } });
  }
}
