import { Module } from '@nestjs/common';
import { SectionsCategoriesService } from './sections-categories.service';
import { SectionsCategoriesController } from './sections-categories.controller';
import { SectionsCategory } from '#src/core/sections-categories/entities/sections-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SectionsCategory])],
  controllers: [SectionsCategoriesController],
  providers: [SectionsCategoriesService],
})
export class SectionsCategoriesModule {}
