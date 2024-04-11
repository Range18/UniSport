import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateEventDto {
  @ApiProperty()
  @IsString()
  readonly name: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly age?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsDate()
  @IsOptional()
  readonly beginningAt?: Date;

  @ApiProperty({ nullable: true, required: false })
  @IsDate()
  @IsOptional()
  readonly endingAt?: Date;

  @ApiProperty()
  @IsNumber()
  readonly category: number;

  @ApiProperty()
  @IsNumber()
  readonly price: number;
}
