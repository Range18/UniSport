import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from '#src/common/base.entity';

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
  long: string;

  @Column({ nullable: false })
  latitude: string;
}
