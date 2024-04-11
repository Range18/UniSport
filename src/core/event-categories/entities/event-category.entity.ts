import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '#src/common/base.entity';
import { Event } from '#src/core/events/entities/event.entity';

@Entity('events-categories')
export class EventCategory extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Event, (event) => event.category, { nullable: true })
  events?: Event[];
}
