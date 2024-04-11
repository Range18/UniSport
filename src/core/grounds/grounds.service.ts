import { HttpStatus, Injectable } from '@nestjs/common';
import { BaseEntityService } from '#src/common/base-entity.service';
import { Ground } from '#src/core/grounds/entities/ground.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import GroundExceptions = AllExceptions.GroundExceptions;

@Injectable()
export class GroundsService extends BaseEntityService<
  Ground,
  'GroundExceptions'
> {
  constructor(
    @InjectRepository(Ground)
    private readonly groundRepository: Repository<Ground>,
  ) {
    super(
      groundRepository,
      new ApiException<'GroundExceptions'>(
        HttpStatus.NOT_FOUND,
        'GroundExceptions',
        GroundExceptions.NotFound,
      ),
    );
  }
}
