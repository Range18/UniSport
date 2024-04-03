import { ApiProperty } from '@nestjs/swagger';

export class AddOrRemoveChildDto {
  @ApiProperty()
  readonly childId: number;
}
