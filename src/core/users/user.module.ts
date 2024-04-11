import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { RolesEntity } from '#src/core/roles/entity/roles.entity';
import { SessionEntity } from '#src/core/session/session.entity';
import { UserController } from '#src/core/users/user.controller';
import { SessionService } from '#src/core/session/session.service';
import { TokenService } from '#src/core/token/token.service';
import { JwtService } from '@nestjs/jwt';
import { ChildrenService } from '#src/core/users/children/children.service';
import { ChildrenController } from '#src/core/users/children/children.controller';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      RolesEntity,
      SessionEntity,
      AssetEntity,
    ]),
  ],
  providers: [
    SessionService,
    TokenService,
    JwtService,
    UserService,
    ChildrenService,
  ],
  controllers: [UserController, ChildrenController],
  exports: [UserService],
})
export class UserModule {}
