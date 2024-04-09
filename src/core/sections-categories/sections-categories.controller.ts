import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SectionsCategoriesService } from './sections-categories.service';
import { CreateSectionsCategoryDto } from './dto/create-sections-category.dto';
import { UpdateSectionsCategoryDto } from './dto/update-sections-category.dto';
import { GetSectionCategoryRdo } from '#src/core/sections-categories/rdo/get-section-category.rdo';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Section Categories')
@Controller('api/sections/categories')
export class SectionsCategoriesController {
  constructor(
    private readonly sectionsCategoriesService: SectionsCategoriesService,
  ) {}

  @ApiBody({ type: CreateSectionsCategoryDto })
  @ApiCreatedResponse({ type: GetSectionCategoryRdo })
  @Post()
  async create(@Body() createSectionsCategoryDto: CreateSectionsCategoryDto) {
    return new GetSectionCategoryRdo(
      await this.sectionsCategoriesService.save(createSectionsCategoryDto),
    );
  }

  @ApiOkResponse({ type: [GetSectionCategoryRdo] })
  @Get()
  async findAll() {
    const categories = await this.sectionsCategoriesService.find({});

    return categories.map((category) => new GetSectionCategoryRdo(category));
  }

  @ApiOkResponse({ type: GetSectionCategoryRdo })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return new GetSectionCategoryRdo(
      await this.sectionsCategoriesService.findOne({ where: { id } }),
    );
  }

  @ApiBody({ type: UpdateSectionsCategoryDto })
  @ApiOkResponse({ type: GetSectionCategoryRdo })
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSectionsCategoryDto: UpdateSectionsCategoryDto,
  ) {
    return new GetSectionCategoryRdo(
      await this.sectionsCategoriesService.updateOne(
        { where: { id } },
        updateSectionsCategoryDto,
      ),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.sectionsCategoriesService.removeOne({ where: { id } });
  }
}
