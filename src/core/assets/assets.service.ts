import { HttpStatus, Injectable, StreamableFile } from '@nestjs/common';
import { BaseEntityService } from '#src/common/base-entity.service';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { SectionsService } from '#src/core/sections/sections.service';

import { unlink } from 'fs/promises';
import { storageConfig } from '#src/common/configs/storage.config';
import { join } from 'path';
import { Section } from '#src/core/sections/entities/section.entity';
import { Event } from '#src/core/events/entities/event.entity';
import { EventsService } from '#src/core/events/events.service';
import { createReadStream } from 'fs';
import { UserService } from '#src/core/users/user.service';
import { NewsService } from '#src/core/news/news.service';
import { News } from '#src/core/news/entities/news.entity';
import StorageExceptions = AllExceptions.StorageExceptions;
import SectionExceptions = AllExceptions.SectionExceptions;
import EventExceptions = AllExceptions.EventExceptions;
import UserExceptions = AllExceptions.UserExceptions;
import NewsExceptions = AllExceptions.NewsExceptions;

@Injectable()
export class AssetsService extends BaseEntityService<
  AssetEntity,
  'StorageExceptions'
> {
  constructor(
    @InjectRepository(AssetEntity)
    private readonly assetsRepository: Repository<AssetEntity>,
    private readonly sectionsService: SectionsService,
    private readonly eventsService: EventsService,
    private readonly userService: UserService,
    private readonly newsService: NewsService,
  ) {
    super(
      assetsRepository,
      new ApiException<'StorageExceptions'>(
        HttpStatus.NOT_FOUND,
        'StorageExceptions',
        StorageExceptions.FileNotFound,
      ),
    );
  }

  async upload(
    file: Express.Multer.File,
    id: number,
    type: 'section' | 'event' | 'user' | 'news',
  ) {
    let entity: Section | Event | News;

    switch (type) {
      case 'section':
        entity = await this.sectionsService.findOne({
          where: { id },
          relations: { image: true },
        });

        if (!entity) {
          throw new ApiException(
            HttpStatus.NOT_FOUND,
            'SectionExceptions',
            SectionExceptions.SectionNotFound,
          );
        }

        break;

      case 'event':
        entity = await this.eventsService.findOne({
          where: { id },
          relations: { image: true },
        });

        if (!entity) {
          throw new ApiException(
            HttpStatus.NOT_FOUND,
            'EventExceptions',
            EventExceptions.EventNotFound,
          );
        }
        break;

      case 'user': {
        const user = await this.userService.findOne({
          where: { id },
          relations: { avatar: true },
        });

        if (!user) {
          throw new ApiException(
            HttpStatus.NOT_FOUND,
            'UserExceptions',
            UserExceptions.UserNotFound,
          );
        }

        if (user.avatar) {
          await unlink(join(storageConfig.path, user.avatar.name));

          await this.removeOne(user.avatar);
        }

        return await this.save({
          name: file.filename,
          user: { id },
          type: type,
          path: file.path,
          mimetype: file.mimetype,
        });
      }

      case 'news':
        entity = await this.newsService.findOne({
          where: { id },
          relations: { image: true },
        });

        if (!entity) {
          throw new ApiException(
            HttpStatus.NOT_FOUND,
            'NewsExceptions',
            NewsExceptions.NotFound,
          );
        }
        break;
    }

    if (entity.image) {
      await unlink(join(storageConfig.path, entity.image.name));

      await this.removeOne(entity.image);
    }

    return await this.save({
      name: file.filename,
      [type]: { id: id },
      type: type,
      path: file.path,
      mimetype: file.mimetype,
    });
  }

  async getFileStream(id: number) {
    const image = await this.findOne({ where: { id } });

    if (!image) {
      throw new ApiException(
        HttpStatus.NOT_FOUND,
        'StorageExceptions',
        StorageExceptions.FileNotFound,
      );
    }

    try {
      const stream = createReadStream(join(image.path, image.name));

      return { buffer: new StreamableFile(stream), mimetype: image.mimetype };
    } catch (error) {
      throw new ApiException(
        HttpStatus.NOT_FOUND,
        'StorageExceptions',
        StorageExceptions.FileNotFound,
      );
    }
  }

  async deleteFile(id: number) {
    const image = await this.findOne({ where: { id } });

    if (!image) {
      throw new ApiException(
        HttpStatus.NOT_FOUND,
        'StorageExceptions',
        StorageExceptions.FileNotFound,
      );
    }

    try {
      await unlink(
        join(storageConfig.path, storageConfig.innerSections, image.name),
      );
    } catch (error) {
      throw new ApiException(
        HttpStatus.NOT_FOUND,
        'StorageExceptions',
        StorageExceptions.FileNotFound,
      );
    }
  }
}
