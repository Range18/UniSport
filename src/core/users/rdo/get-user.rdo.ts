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
    //TODO
    // this.avatar = user.avatar?.name
    //   ? `${backendServer.urlValue}/api/users/assets/avatars/${user.avatar.name}`
    //   : undefined;
    this.updatedAt = user.updatedAt;
    this.createdAt = user.createdAt;
  }
}
