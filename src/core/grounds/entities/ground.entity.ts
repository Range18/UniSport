import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '#src/common/base.entity';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';

@Entity()
export class Ground extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  timetable: string;

  @Column({ nullable: false, default: 0 })
  rating: number;

  @Column({ nullable: false })
  longitude: string;

  @Column({ nullable: false })
  latitude: string;

  @ManyToOne(() => AssetEntity, (image) => image.grounds, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'image' })
  readonly image?: AssetEntity;
}
