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
export class Recommendations extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  text: string;

  @Column({ nullable: true })
  link: string;

  @Column({ nullable: false, default: 0 })
  price: number;

  @Column({ nullable: true })
  beginningAt?: Date;

  @Column({ nullable: true })
  endingAt?: Date;

  @OneToOne(() => AssetEntity, (image) => image.recommendations, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'image' })
  image?: AssetEntity;
}
