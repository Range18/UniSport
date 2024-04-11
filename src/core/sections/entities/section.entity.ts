import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '#src/common/base.entity';
import { SectionsCategory } from '#src/core/sections-categories/entities/sections-category.entity';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';
import { UserEntity } from '#src/core/users/user.entity';

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

  @Column({ nullable: true })
  days: string;

  @Column({ nullable: true })
  beginningAt?: Date;

  @Column({ nullable: true })
  endingAt?: Date;

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

  @ManyToMany(() => UserEntity, (user) => user.courses, {
    nullable: true,
  })
  coaches: UserEntity[];
}
