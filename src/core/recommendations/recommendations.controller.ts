import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { RecommendationsService } from './recommendations.service';
import { CreateRecommendationDto } from './dto/create-recommendation.dto';
import { UpdateRecommendationDto } from './dto/update-recommendation.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetRecommendationRdo } from '#src/core/recommendations/rdo/get-recommendation.rdo';

@ApiTags('Recommendations')
@Controller('api/recommendations')
export class RecommendationsController {
  constructor(
    private readonly recommendationsService: RecommendationsService,
  ) {}

  @ApiCreatedResponse({ type: GetRecommendationRdo })
  @Post()
  async create(@Body() createRecommendationDto: CreateRecommendationDto) {
    return new GetRecommendationRdo(
      await this.recommendationsService.save(createRecommendationDto),
    );
  }

  @ApiOkResponse({ type: [GetRecommendationRdo] })
  @Get()
  async findAll() {
    const recommendations = await this.recommendationsService.find({
      relations: { image: true },
    });

    return recommendations.map((entity) => new GetRecommendationRdo(entity));
  }

  @ApiOkResponse({ type: GetRecommendationRdo })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return new GetRecommendationRdo(
      await this.recommendationsService.findOne({
        where: { id },
        relations: { image: true },
      }),
    );
  }

  @ApiOkResponse({ type: GetRecommendationRdo })
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateRecommendationDto: UpdateRecommendationDto,
  ) {
    return new GetRecommendationRdo(
      await this.recommendationsService.updateOne(
        { where: { id } },
        updateRecommendationDto,
      ),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.recommendationsService.remove({ where: { id } });
  }
}
