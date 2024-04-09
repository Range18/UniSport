import { ApiProperty } from '@nestjs/swagger';

export class UpdateSectionDto {
  @ApiProperty({ nullable: true, required: false })
  readonly address?: string;

  @ApiProperty({ nullable: true, required: false })
  readonly age?: string;

  @ApiProperty({ nullable: true, required: false })
  readonly categoryId?: number;

  @ApiProperty({ nullable: true, required: false })
  readonly name?: string;

  @ApiProperty({ nullable: true, required: false })
  readonly timetable?: string;

  @ApiProperty({ nullable: true, required: false })
  readonly description?: string;
}
