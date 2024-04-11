import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateSectionDto {
  @ApiProperty()
  @IsString()
  readonly address: string;

  @ApiProperty()
  @IsString()
  readonly age: string;

  @ApiProperty()
  @IsNumber()
  readonly categoryId: number;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty()
  @IsString()
  readonly name: string;

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
}
