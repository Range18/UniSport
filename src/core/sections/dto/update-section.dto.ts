import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateSectionDto {
  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly address?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly age?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsNumber()
  @IsOptional()
  readonly categoryId?: number;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly name?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  days?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsDate()
  @IsOptional()
  beginningAt?: Date;

  @ApiProperty({ nullable: true, required: false })
  @IsDate()
  @IsOptional()
  endingAt?: Date;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;
}
