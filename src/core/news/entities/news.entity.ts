import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '#src/common/base.entity';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';

@Entity()
export class News extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  text: string;

  @OneToOne(() => AssetEntity, (image) => image.section, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'image' })
  image?: AssetEntity;
}
