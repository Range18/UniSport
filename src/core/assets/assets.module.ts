import { Module } from '@nestjs/common';
import { AssetsService } from './assets.service';
import { AssetsController } from './assets.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';
import { MulterModule } from '@nestjs/platform-express';
import { MulterConfigService } from '#src/core/assets/multer-config.service';
import { SectionsModule } from '#src/core/sections/sections.module';
import { EventsModule } from '#src/core/events/events.module';
import { UserModule } from '#src/core/users/user.module';
import { Section } from '#src/core/sections/entities/section.entity';
import { Event } from '#src/core/events/entities/event.entity';
import { News } from '#src/core/news/entities/news.entity';
import { UserEntity } from '#src/core/users/user.entity';
import { NewsModule } from '#src/core/news/news.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AssetEntity, Section, Event, News, UserEntity]),
    MulterModule.registerAsync({ useClass: MulterConfigService }),
    SectionsModule,
    EventsModule,
    UserModule,
    NewsModule,
  ],
  controllers: [AssetsController],
  providers: [AssetsService],
})
export class AssetsModule {}
