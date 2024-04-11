import { Event } from '#src/core/events/entities/event.entity';
import { ApiProperty } from '@nestjs/swagger';

export class GetEventRdo {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

  constructor(event: Event) {
    this.id = event.id;
    this.name = event.name;
    this.description = event.description;

    this.createdAt = event.createdAt;
    this.updatedAt = event.updatedAt;
  }
}
