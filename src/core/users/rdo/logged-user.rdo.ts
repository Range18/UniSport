import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class LoggedUserRdo {
  @Exclude()
  readonly refreshToken: string;

  @ApiProperty()
  readonly accessToken: string;

  @Exclude()
  readonly sessionExpireAt: Date;

  @ApiProperty()
  readonly phone: string;

  constructor(
    refreshToken: string,
    accessToken: string,
    sessionExpireAt: Date,
    phone: string,
  ) {
    this.refreshToken = refreshToken;
    this.accessToken = accessToken;
    this.sessionExpireAt = sessionExpireAt;
    this.phone = phone;
  }
}
