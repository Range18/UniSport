import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '#src/common/base.entity';
import { SectionsCategory } from '#src/core/sections-categories/entities/sections-category.entity';

@Entity()
export class Section extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: false })
  address: string;

  @Column({ nullable: false })
  timetable: string;

  @Column({ nullable: false })
  age: string;

  @Column({ nullable: false })
  rating: number;

  @ManyToOne(() => SectionsCategory, (categoty) => categoty.sections)
  category: SectionsCategory;
}
