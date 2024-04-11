import { Module } from '@nestjs/common';
import { GroundsService } from './grounds.service';
import { GroundsController } from './grounds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ground } from '#src/core/grounds/entities/ground.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ground])],
  controllers: [GroundsController],
  providers: [GroundsService],
})
export class GroundsModule {}
