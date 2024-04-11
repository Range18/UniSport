import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEventDto {
  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly name?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly age?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly date?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsNumber()
  @IsOptional()
  readonly category?: number;

  @ApiProperty({ nullable: true, required: false })
  @IsNumber()
  @IsOptional()
  readonly price?: number;
}
