import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '#src/common/base.entity';
import { Section } from '#src/core/sections/entities/section.entity';
import { Event } from '#src/core/events/entities/event.entity';
import { Recommendations } from '#src/core/recommendations/entities/recommendations.entity';
import { UserEntity } from '#src/core/users/user.entity';
import { Ground } from '#src/core/grounds/entities/ground.entity';

@Entity('assets')
export class AssetEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  path: string;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false })
  mimetype: string;

  @OneToOne(() => Section, (section) => section.image, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  section?: Section;

  @OneToOne(() => Event, (event) => event.image, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  event?: Event;

  @OneToOne(() => Recommendations, (recommendation) => recommendation.image, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  recommendations?: Recommendations;

  @OneToOne(() => UserEntity, (user) => user.avatar, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  user?: UserEntity;

  @OneToMany(() => Ground, (ground) => ground.image, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  grounds?: Ground[];
}
