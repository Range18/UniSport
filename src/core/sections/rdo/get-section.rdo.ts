import { ApiProperty } from '@nestjs/swagger';
import { Section } from '#src/core/sections/entities/section.entity';
import { GetSectionCategoryRdo } from '#src/core/sections-categories/rdo/get-section-category.rdo';

export class GetSectionRdo {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly address: string;

  @ApiProperty()
  readonly age: string;

  @ApiProperty({ type: GetSectionCategoryRdo })
  readonly category: GetSectionCategoryRdo;

  @ApiProperty({ nullable: true, required: false })
  readonly description?: string;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly rating: number;

  @ApiProperty()
  readonly timetable: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

  constructor(section: Section) {
    this.id = section.id;
    this.name = section.name;
    this.age = section.age;
    this.address = section.address;
    this.description = section.description;
    this.timetable = section.timetable;
    this.category = new GetSectionCategoryRdo(section.category);
    this.rating = section.rating;

    this.createdAt = section.createdAt;
    this.updatedAt = section.updatedAt;
  }
}
