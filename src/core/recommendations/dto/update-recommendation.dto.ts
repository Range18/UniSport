import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateRecommendationDto {
  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly title?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly text?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsDate()
  @IsOptional()
  readonly beginningAt?: Date;

  @ApiProperty({ nullable: true, required: false })
  @IsDate()
  @IsOptional()
  readonly endingAt?: Date;

  @ApiProperty({ nullable: true, required: false })
  @IsNumber()
  @IsOptional()
  readonly price?: number;
}
