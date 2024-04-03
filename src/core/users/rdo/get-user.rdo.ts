import { UserEntity } from '#src/core/users/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { RolesEntity } from '#src/core/roles/entity/roles.entity';

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

  //TODO
  // @ApiProperty()
  // readonly avatar?: string;

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
    //TODO
    // this.avatar = user.avatar?.name
    //   ? `${backendServer.urlValue}/api/users/assets/avatars/${user.avatar.name}`
    //   : undefined;

    this.updatedAt = user.updatedAt;
    this.createdAt = user.createdAt;
  }
}
