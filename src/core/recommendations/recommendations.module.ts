import { Module } from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';
import { RecommendationsController } from './recommendations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recommendations } from '#src/core/recommendations/entities/recommendations.entity';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recommendations, AssetEntity])],
  controllers: [RecommendationsController],
  providers: [RecommendationsService],
  exports: [RecommendationsService],
})
export class RecommendationsModule {}
