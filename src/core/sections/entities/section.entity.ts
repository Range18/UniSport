import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '#src/common/base.entity';
import { SectionsCategory } from '#src/core/sections-categories/entities/sections-category.entity';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';

@Entity()
export class Section extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ type: 'longtext', nullable: true })
  description?: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  timetable: string;

  @Column({ nullable: false })
  age: string;

  @Column({ nullable: false, default: 0 })
  rating: number;

  @ManyToOne(() => SectionsCategory, (category) => category.sections, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  category: SectionsCategory;

  @OneToOne(() => AssetEntity, (image) => image.section, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'image' })
  image?: AssetEntity;
}
