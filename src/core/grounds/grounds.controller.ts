import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { GroundsService } from './grounds.service';
import { CreateGroundDto } from './dto/create-ground.dto';
import { UpdateGroundDto } from './dto/update-ground.dto';
import { ApiTags } from '@nestjs/swagger';
import { GetGroundRdo } from '#src/core/grounds/rdo/get-ground.rdo';

@ApiTags('Grounds')
@Controller('api/grounds')
export class GroundsController {
  constructor(private readonly groundsService: GroundsService) {}

  @Post()
  async create(@Body() createGroundDto: CreateGroundDto) {
    return await this.groundsService.save(createGroundDto);
  }

  @Get()
  async findAll() {
    const grounds = await this.groundsService.find({});

    return grounds.map((ground) => new GetGroundRdo(ground));
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return new GetGroundRdo(
      await this.groundsService.findOne({ where: { id } }),
    );
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateGroundDto: UpdateGroundDto,
  ) {
    return new GetGroundRdo(
      await this.groundsService.updateOne({ where: { id } }, updateGroundDto),
    );
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.groundsService.removeOne({ where: { id } });
  }
}
