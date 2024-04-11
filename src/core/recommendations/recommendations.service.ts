import { HttpStatus, Injectable } from '@nestjs/common';
import { BaseEntityService } from '#src/common/base-entity.service';
import { Recommendations } from '#src/core/recommendations/entities/recommendations.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import RecommendationsExceptions = AllExceptions.RecommendationsExceptions;

@Injectable()
export class RecommendationsService extends BaseEntityService<
  Recommendations,
  'RecommendationsExceptions'
> {
  constructor(
    @InjectRepository(Recommendations)
    private readonly recommendationsRepository: Repository<Recommendations>,
  ) {
    super(
      recommendationsRepository,
      new ApiException<'RecommendationsExceptions'>(
        HttpStatus.NOT_FOUND,
        'RecommendationsExceptions',
        RecommendationsExceptions.NotFound,
      ),
    );
  }
}
