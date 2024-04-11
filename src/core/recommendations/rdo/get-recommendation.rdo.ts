import { GetFileRdo } from '#src/core/assets/rdo/get-file.rdo';
import { ApiProperty } from '@nestjs/swagger';
import { Recommendations } from '#src/core/recommendations/entities/recommendations.entity';

export class GetRecommendationRdo {
  @ApiProperty()
  readonly id: number;

  @ApiProperty()
  readonly text: string;

  @ApiProperty()
  readonly title: string;

  @ApiProperty({ nullable: true })
  readonly beginningAt?: Date;

  @ApiProperty({ nullable: true })
  readonly endingAt?: Date;

  @ApiProperty()
  readonly price: number;

  @ApiProperty({ nullable: true, type: GetFileRdo })
  readonly image?: GetFileRdo;

  @ApiProperty()
  readonly createdAt: Date;

  @ApiProperty()
  readonly updatedAt: Date;

  constructor(recommendations: Recommendations) {
    this.id = recommendations.id;
    this.text = recommendations.text;
    this.title = recommendations.title;
    this.image = recommendations.image
      ? new GetFileRdo(recommendations.image)
      : undefined;
    this.beginningAt = recommendations.beginningAt;
    this.endingAt = recommendations.endingAt;
    this.price = recommendations.price;

    this.createdAt = recommendations.createdAt;
    this.updatedAt = recommendations.updatedAt;
  }
}
