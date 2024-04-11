import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateEventDto {
  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly name?: string;

  @ApiProperty({ nullable: true, required: false })
  @IsString()
  @IsOptional()
  readonly description?: string;
}
