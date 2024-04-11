import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { GetSectionRdo } from '#src/core/sections/rdo/get-section.rdo';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { SectionsCategoriesService } from '#src/core/sections-categories/sections-categories.service';

@ApiTags('Sections')
@Controller('api/sections')
export class SectionsController {
  constructor(
    private readonly sectionsService: SectionsService,
    private readonly sectionsCategoryService: SectionsCategoriesService,
  ) {}

  @ApiBody({ type: CreateSectionDto })
  @ApiCreatedResponse({ type: GetSectionRdo })
  @Post()
  async create(@Body() createSectionDto: CreateSectionDto) {
    return new GetSectionRdo(
      await this.sectionsService.save({
        ...createSectionDto,
        category: await this.sectionsCategoryService.findOne({
          where: { id: createSectionDto.categoryId },
        }),
      }),
    );
  }

  @ApiOkResponse({ type: [GetSectionRdo] })
  @ApiQuery({ name: 'type', type: String })
  @Get()
  async findAll(@Query('type') type: string) {
    const sections = await this.sectionsService.find({
      where: { category: { name: type ? type : undefined } },
      relations: { category: true },
    });

    return sections.map((section) => new GetSectionRdo(section));
  }

  @ApiOkResponse({ type: GetSectionRdo })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return new GetSectionRdo(
      await this.sectionsService.findOne({
        where: { id },
        relations: { category: true },
      }),
    );
  }

  @ApiBody({ type: UpdateSectionDto })
  @ApiOkResponse({ type: GetSectionRdo })
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateSectionDto: UpdateSectionDto,
  ) {
    return new GetSectionRdo(
      await this.sectionsService.updateOne(
        { where: { id }, relations: { category: true } },
        updateSectionDto,
      ),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.sectionsService.removeOne({ where: { id } });
  }
}
