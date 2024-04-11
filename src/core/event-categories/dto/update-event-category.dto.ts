import { ApiProperty } from '@nestjs/swagger';

export class UpdateEventCategoryDto {
  @ApiProperty()
  readonly name: string;
}
