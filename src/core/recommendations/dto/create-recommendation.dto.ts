import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateRecommendationDto {
  @ApiProperty()
  @IsString()
  readonly title: string;

  @ApiProperty()
  @IsString()
  readonly text: string;

  @ApiProperty({ nullable: true, required: false })
  @IsDate()
  @IsOptional()
  beginningAt?: Date;

  @ApiProperty({ nullable: true, required: false })
  @IsDate()
  @IsOptional()
  endingAt?: Date;

  @ApiProperty()
  @IsNumber()
  price: number;
}
