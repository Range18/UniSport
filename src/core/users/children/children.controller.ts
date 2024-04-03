import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ChildrenService } from '#src/core/users/children/children.service';
import { UserService } from '#src/core/users/user.service';
import { User } from '#src/common/decorators/User.decorator';
import { type UserRequest } from '#src/common/types/user-request.type';
import { AddOrRemoveChildDto } from '#src/core/users/children/dto/addChild.dto';
import { ApiBody, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { GetUserRdo } from '#src/core/users/rdo/get-user.rdo';
import { AuthGuard } from '#src/common/decorators/guards/authGuard.decorator';
import { RolesGuard } from '#src/common/decorators/guards/roles-guard.decorator';

@Controller('api/users/children')
export class ChildrenController {
  constructor(
    private readonly childrenService: ChildrenService,
    private readonly userService: UserService,
  ) {}

  @ApiBody({ type: AddOrRemoveChildDto })
  @ApiCreatedResponse({ type: GetUserRdo })
  @RolesGuard('parent')
  @AuthGuard()
  @Post()
  async addChild(
    @User() user: UserRequest,
    @Body() child: AddOrRemoveChildDto,
  ) {
    return new GetUserRdo(
      await this.childrenService.addChild(user.id, child.childId),
    );
  }

  @AuthGuard()
  @ApiOkResponse({ type: [GetUserRdo] })
  @Get()
  async getChildren(@User() user: UserRequest) {
    const userEntity = await this.userService.findOne({
      where: { id: user.id },
      relations: { children: true, parents: true },
    });

    return userEntity.children.map((child) => new GetUserRdo(child));
  }

  @ApiBody({ type: AddOrRemoveChildDto })
  @ApiOkResponse({ type: GetUserRdo })
  @AuthGuard()
  @Delete()
  async removeChild(
    @User() user: UserRequest,
    @Body() child: AddOrRemoveChildDto,
  ) {
    return new GetUserRdo(
      await this.childrenService.removeChild(user.id, child.childId),
    );
  }
}
