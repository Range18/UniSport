import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { EventCategoriesService } from './event-categories.service';
import { CreateEventCategoryDto } from './dto/create-event-category.dto';
import { UpdateEventCategoryDto } from './dto/update-event-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Event Categories')
@Controller('api/events/categories')
export class EventCategoriesController {
  constructor(
    private readonly eventCategoriesService: EventCategoriesService,
  ) {}

  @Post()
  async create(@Body() createEventCategoryDto: CreateEventCategoryDto) {
    return await this.eventCategoriesService.save(createEventCategoryDto);
  }

  @Get()
  async findAll() {
    return await this.eventCategoriesService.find({});
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.eventCategoriesService.findOne({ where: { id } });
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEventCategoryDto: UpdateEventCategoryDto,
  ) {
    return await this.eventCategoriesService.updateOne(
      { where: { id } },
      updateEventCategoryDto,
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.eventCategoriesService.removeOne({ where: { id } });
  }
}
