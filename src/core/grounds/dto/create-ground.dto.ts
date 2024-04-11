import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGroundDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsString()
  readonly address: string;

  @ApiProperty()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsString()
  readonly latitude: string;

  @ApiProperty()
  @IsString()
  readonly longitude: string;

  @ApiProperty()
  @IsString()
  readonly timetable: string;
}
