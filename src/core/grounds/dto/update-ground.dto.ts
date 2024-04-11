import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateGroundDto {
  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly name?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly address?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly latitude?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly long?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly timetable?: string;
}
