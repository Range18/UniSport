import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { BaseEntityService } from '#src/common/base-entity.service';
import { Event } from '#src/core/events/entities/event.entity';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import EventExceptions = AllExceptions.EventExceptions;

@Injectable()
export class EventsService extends BaseEntityService<Event, 'EventExceptions'> {
  constructor(
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {
    super(
      eventRepository,
      new ApiException(
        HttpStatus.NOT_FOUND,
        'EventExceptions',
        EventExceptions.EventNotFound,
      ),
    );
  }
}
