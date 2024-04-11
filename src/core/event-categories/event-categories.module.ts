import { Module } from '@nestjs/common';
import { EventCategoriesService } from './event-categories.service';
import { EventCategoriesController } from './event-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventCategory } from '#src/core/event-categories/entities/event-category.entity';
import { Event } from '#src/core/events/entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EventCategory, Event])],
  controllers: [EventCategoriesController],
  providers: [EventCategoriesService],
})
export class EventCategoriesModule {}
