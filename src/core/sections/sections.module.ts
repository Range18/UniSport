import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from '#src/core/sections/entities/section.entity';
import { SectionsCategoriesModule } from '#src/core/sections-categories/sections-categories.module';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Section, AssetEntity]),
    SectionsCategoriesModule,
  ],
  controllers: [SectionsController],
  providers: [SectionsService],
  exports: [SectionsService],
})
export class SectionsModule {}
