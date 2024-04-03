import { HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '#src/core/users/user.service';
import { UserEntity } from '#src/core/users/user.entity';
import { ApiException } from '#src/common/exception-handler/api-exception';
import { AllExceptions } from '#src/common/exception-handler/exeption-types/all-exceptions';
import UserExceptions = AllExceptions.UserExceptions;
import ChildExceptions = AllExceptions.ChildExceptions;

@Injectable()
export class ChildrenService {
  constructor(private userService: UserService) {}

  async addChild(userId: number, childId: number): Promise<UserEntity> {
    const user = await this.userService.findOne({
      where: { id: userId },
      relations: { children: true, parents: true },
    });

    const child = await this.userService.findOne({
      where: { id: childId },
      relations: { children: true, parents: true, role: true },
    });

    if (child.role.name !== 'child') {
      throw new ApiException(
        HttpStatus.BAD_REQUEST,
        'ChildExceptions',
        ChildExceptions.IsNotChild,
      );
    }

    if (user.id === child.id) {
      throw new ApiException(
        HttpStatus.BAD_REQUEST,
        'UserExceptions',
        UserExceptions.RelationConflict,
      );
    }

    const index = user.children.findIndex(
      (userChild) => userChild.id === child.id,
    );

    if (index !== -1) {
      throw new ApiException(
        HttpStatus.BAD_REQUEST,
        'ChildExceptions',
        ChildExceptions.ChildIsAlreadyYours,
      );
    }

    user.children.push(child);

    return await this.userService.save(user);
  }

  async removeChild(userId: number, childId: number): Promise<UserEntity> {
    const user = await this.userService.findOne({
      where: { id: userId },
      relations: { children: true, parents: true },
    });

    const child = await this.userService.findOne({
      where: { id: childId },
      relations: { children: true, parents: true },
    });

    const index = user.children.findIndex(
      (userChild) => userChild.id === child.id,
    );

    if (index === -1) {
      throw new ApiException(
        HttpStatus.NOT_FOUND,
        'ChildExceptions',
        ChildExceptions.ChildNotFound,
      );
    }

    user.children.splice(index, 1);

    return await this.userService.save(user);
  }
}
