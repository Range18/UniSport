import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SessionEntity } from '../session/session.entity';
import { BaseEntity } from '#src/common/base.entity';
import { RolesEntity } from '#src/core/roles/entity/roles.entity';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';
import { Section } from '#src/core/sections/entities/section.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  readonly id: number;

  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  surname: string;

  @Column({ nullable: true, unique: true })
  phone: string;

  @Column({ nullable: false })
  password: string;

  @ManyToMany(() => UserEntity, (user) => user.parents, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  @JoinTable({
    name: 'children_to_parents',
    joinColumn: { name: 'parentId' },
    inverseJoinColumn: { name: 'childId' },
  })
  children?: UserEntity[];

  @ManyToMany(() => UserEntity, (user) => user.children, {
    nullable: true,
    onDelete: 'CASCADE',
  })
  parents?: UserEntity[];

  @ManyToOne(() => RolesEntity, (role) => role.users, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'role' })
  role: RolesEntity;

  @OneToMany(() => SessionEntity, (session) => session.user, {
    onDelete: 'CASCADE',
  })
  sessions: SessionEntity[];

  @OneToOne(() => AssetEntity, (image) => image.section, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'avatar' })
  avatar?: AssetEntity;

  @ManyToMany(() => Section, (section) => section.coaches, {
    nullable: true,
  })
  @JoinTable({
    name: 'coaches_to_sections',
    joinColumn: { name: 'coach', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'section', referencedColumnName: 'id' },
  })
  courses?: Section[];
}
