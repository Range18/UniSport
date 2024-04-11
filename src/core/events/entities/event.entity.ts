import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '#src/common/base.entity';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';
import { EventCategory } from '#src/core/event-categories/entities/event-category.entity';

@Entity('events')
export class Event extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'longtext', nullable: true })
  description?: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  type?: string;

  @Column({ nullable: true })
  date?: string;

  @OneToOne(() => AssetEntity, (image) => image.event, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'image' })
  image?: AssetEntity;

  @ManyToOne(() => EventCategory, (category) => category.events, {
    nullable: false,
  })
  category: EventCategory;
}
