import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '#src/common/base.entity';
import { Section } from '#src/core/sections/entities/section.entity';

@Entity('section-categories')
export class SectionsCategory extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Section, (section) => section.category, {
    nullable: true,
    onDelete: 'DEFAULT',
  })
  sections?: Section[];
}
