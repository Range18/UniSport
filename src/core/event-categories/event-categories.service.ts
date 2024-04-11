import { HttpStatus, Injectable } from '@nestjs/common';
import { BaseEntityService } from '#src/common/base-entity.service';
import { EventCategory } from '#src/core/event-categories/entities/event-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import EventCategoryExceptions = AllExceptions.EventCategoryExceptions;

@Injectable()
export class EventCategoriesService extends BaseEntityService<
  EventCategory,
  'EventCategoryExceptions'
> {
  constructor(
    @InjectRepository(EventCategory)
    private readonly eventsCategoryRepository: Repository<EventCategory>,
  ) {
    super(
      eventsCategoryRepository,
      new ApiException(
        HttpStatus.NOT_FOUND,
        'EventCategoryExceptions',
        EventCategoryExceptions.NotFound,
      ),
    );
  }
}
