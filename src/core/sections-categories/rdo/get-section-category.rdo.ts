import { SectionsCategory } from '#src/core/sections-categories/entities/sections-category.entity';
import { ApiProperty } from '@nestjs/swagger';

export class GetSectionCategoryRdo {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  constructor(category: SectionsCategory) {
    this.id = category.id;
    this.name = category.name;
  }
}
