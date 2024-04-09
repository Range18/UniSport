import { HttpStatus, Injectable } from '@nestjs/common';
import { BaseEntityService } from '#src/common/base-entity.service';
import { SectionsCategory } from '#src/core/sections-categories/entities/sections-category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import SectionCategoryExceptions = AllExceptions.SectionCategoryExceptions;

@Injectable()
export class SectionsCategoriesService extends BaseEntityService<
  SectionsCategory,
  'SectionCategoryExceptions'
> {
  constructor(
    @InjectRepository(SectionsCategory)
    private readonly categoryRepository: Repository<SectionsCategory>,
  ) {
    super(
      categoryRepository,
      new ApiException<'SectionCategoryExceptions'>(
        HttpStatus.NOT_FOUND,
        'SectionCategoryExceptions',
        SectionCategoryExceptions.SectionCategoryNotFound,
      ),
    );
  }
}
