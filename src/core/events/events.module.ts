import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from '#src/core/events/entities/event.entity';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event, AssetEntity])],
  controllers: [EventsController],
  providers: [EventsService],
  exports: [EventsService],
})
export class EventsModule {}
