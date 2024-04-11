import { ApiProperty } from '@nestjs/swagger';
import { Ground } from '#src/core/grounds/entities/ground.entity';

export class GetGroundRdo {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  address: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  latitude: string;

  @ApiProperty()
  longitude: string;

  @ApiProperty()
  rating: number;

  @ApiProperty()
  timetable: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

  constructor(ground: Ground) {
    this.id = ground.id;
    this.name = ground.name;
    this.address = ground.address;
    this.description = ground.description;
    this.timetable = ground.timetable;
    this.rating = ground.rating;
    this.longitude = ground.longitude;
    this.latitude = ground.latitude;
    this.createdAt = ground.createdAt;
    this.updatedAt = ground.updatedAt;
  }
}
