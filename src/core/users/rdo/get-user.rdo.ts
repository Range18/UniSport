import { UserEntity } from '#src/core/users/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { RolesEntity } from '#src/core/roles/entity/roles.entity';
import { GetFileRdo } from '#src/core/assets/rdo/get-file.rdo';

export class GetUserRdo {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly firstname: string;

  @ApiProperty()
  readonly surname: string;

  @ApiProperty()
  readonly phone: string;

  @ApiProperty({ type: () => RolesEntity })
  readonly role: RolesEntity;

  @ApiProperty({ type: () => [GetUserRdo] })
  readonly children: GetUserRdo[];

  @ApiProperty({ type: () => [GetUserRdo] })
  readonly parents: GetUserRdo[];

  @ApiProperty({ nullable: true, type: GetFileRdo })
  readonly avatar?: GetFileRdo;

  @ApiProperty()
  readonly updatedAt: Date;

  @ApiProperty()
  readonly createdAt: Date;

  constructor(user: UserEntity) {
    this.id = user.id;
    this.firstname = user.firstname;
    this.surname = user.surname;
    this.phone = user.phone;
    this.role = user.role;

    if (user.children && user.children?.length !== 0) {
      this.children = user.children.map((child) => new GetUserRdo(child));
    } else {
      this.children = [];
    }

    if (user.children && user.parents?.length !== 0) {
      this.parents = user.parents.map((parent) => new GetUserRdo(parent));
    } else {
      this.parents = [];
    }

    this.avatar = user.avatar ? new GetFileRdo(user.avatar) : undefined;

    this.updatedAt = user.updatedAt;
    this.createdAt = user.createdAt;
  }
}
