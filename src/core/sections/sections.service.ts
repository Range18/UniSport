import { HttpStatus, Injectable } from '@nestjs/common';
import { BaseEntityService } from '#src/common/base-entity.service';
import { Section } from '#src/core/sections/entities/section.entity';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import SectionExceptions = AllExceptions.SectionExceptions;

@Injectable()
export class SectionsService extends BaseEntityService<
  Section,
  'SectionExceptions'
> {
  constructor(
    @InjectRepository(Section)
    private readonly sectionRepository: Repository<Section>,
  ) {
    super(
      sectionRepository,
      new ApiException(
        HttpStatus.NOT_FOUND,
        'SectionExceptions',
        SectionExceptions.SectionNotFound,
      ),
    );
  }
}
