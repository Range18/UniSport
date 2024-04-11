import { Event } from '#src/core/events/entities/event.entity';
import { ApiProperty } from '@nestjs/swagger';
import { GetFileRdo } from '#src/core/assets/rdo/get-file.rdo';
import { EventCategory } from '#src/core/event-categories/entities/event-category.entity';

export class GetEventRdo {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly description: string;

  @ApiProperty({ nullable: true })
  readonly age?: string;

  @ApiProperty({ nullable: true })
  readonly date?: string;

  @ApiProperty({ nullable: true })
  readonly category: EventCategory;

  @ApiProperty({ nullable: false })
  readonly price: number;

  @ApiProperty({ nullable: true, type: GetFileRdo })
  readonly image?: GetFileRdo;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

  constructor(event: Event) {
    this.id = event.id;
    this.name = event.name;
    this.description = event.description;
    this.age = event.age;
    this.date = event.date;
    this.price = event.price;
    this.category = event.category;

    this.image = event.image ? new GetFileRdo(event.image) : undefined;

    this.createdAt = event.createdAt;
    this.updatedAt = event.updatedAt;
  }
}
