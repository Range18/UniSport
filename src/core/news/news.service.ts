import { HttpStatus, Injectable } from '@nestjs/common';
import { BaseEntityService } from '#src/common/base-entity.service';
import { News } from '#src/core/news/entities/news.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import NewsExceptions = AllExceptions.NewsExceptions;

@Injectable()
export class NewsService extends BaseEntityService<News, 'NewsExceptions'> {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,
  ) {
    super(
      newsRepository,
      new ApiException<'NewsExceptions'>(
        HttpStatus.NOT_FOUND,
        'NewsExceptions',
        NewsExceptions.NotFound,
      ),
    );
  }
}
