import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { GetSectionRdo } from '#src/core/sections/rdo/get-section.rdo';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Sections')
@Controller('api/sections')
export class SectionsController {
  constructor(private readonly sectionsService: SectionsService) {}

  @ApiBody({ type: CreateSectionDto })
  @ApiCreatedResponse({ type: GetSectionRdo })
  @Post()
  async create(@Body() createSectionDto: CreateSectionDto) {
    return new GetSectionRdo(await this.sectionsService.save(createSectionDto));
  }

  @ApiOkResponse({ type: [GetSectionRdo] })
  @Get()
  async findAll() {
    const sections = await this.sectionsService.find({});

    return sections.map((section) => new GetSectionRdo(section));
  }

  @ApiOkResponse({ type: GetSectionRdo })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return new GetSectionRdo(
      await this.sectionsService.findOne({ where: { id } }),
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
      await this.sectionsService.updateOne({ where: { id } }, updateSectionDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.sectionsService.removeOne({ where: { id } });
  }
}
