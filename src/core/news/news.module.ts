import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from '#src/core/news/entities/news.entity';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([News, AssetEntity])],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
