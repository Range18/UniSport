import { ApiProperty } from '@nestjs/swagger';

export class CreateEventCategoryDto {
  @ApiProperty()
  readonly name: string;
}
