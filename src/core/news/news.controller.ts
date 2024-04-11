import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { NewsService } from './news.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('News')
@Controller('api/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  async create(@Body() createNewsDto: CreateNewsDto) {
    return await this.newsService.save(createNewsDto);
  }

  @Get()
  async findAll() {
    const news = await this.newsService.find({});

    return news;
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.newsService.findOne({ where: { id } });
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateNewsDto: UpdateNewsDto) {
    return await this.newsService.updateOne({ where: { id } }, updateNewsDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.newsService.remove({ where: { id } });
  }
}
