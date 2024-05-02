import { GetFileRdo } from '#src/core/assets/rdo/get-file.rdo';
import { ApiProperty } from '@nestjs/swagger';
import { Recommendations } from '#src/core/recommendations/entities/recommendations.entity';
import {backendServer} from "#src/common/configs/config";

export class GetRecommendationRdo {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly text: string;

  @ApiProperty()
  readonly link: string;

  @ApiProperty()
  readonly title: string;

  @ApiProperty({ nullable: true })
  readonly beginningAt?: Date;

  @ApiProperty({ nullable: true })
  readonly endingAt?: Date;

  @ApiProperty()
  readonly price: number;

  @ApiProperty({ nullable: true })
  readonly image?: string;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

  constructor(recommendations: Recommendations) {
    this.id = recommendations.id;
    this.text = recommendations.text;
    this.title = recommendations.title;
    this.image = recommendations?.image ? `${backendServer.urlValue}/api/assets/${recommendations?.image.id}/file` : null
    this.beginningAt = recommendations.beginningAt;
    this.endingAt = recommendations.endingAt;
    this.price = recommendations.price;
    this.link = recommendations.link

    this.createdAt = recommendations.createdAt;
    this.updatedAt = recommendations.updatedAt;
  }
}
