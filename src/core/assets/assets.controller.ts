import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { AssetsService } from './assets.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { type Response } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { GetFileRdo } from '#src/core/assets/rdo/get-file.rdo';

@ApiTags('Assets')
@Controller('api')
export class AssetsController {
  constructor(private readonly assetsService: AssetsService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('/sections/:id/assets')
  async uploadSectionImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: number,
  ) {
    return new GetFileRdo(await this.assetsService.upload(file, id, 'section'));
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('/users/:id/assets')
  async uploadUserAvatar(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: number,
  ) {
    return new GetFileRdo(await this.assetsService.upload(file, id, 'user'));
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('/recommendations/:id/assets')
  async uploadRecommendationsImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: number,
  ) {
    return new GetFileRdo(
      await this.assetsService.upload(file, id, 'recommendations'),
    );
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('/events/:id/assets')
  async uploadEventImage(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: number,
  ) {
    return new GetFileRdo(await this.assetsService.upload(file, id, 'event'));
  }

  @Get('assets/:id/file')
  @Get('assets/:id/file')
  async GetImageStream(
    @Res({ passthrough: true }) res: Response,
    @Param('id') id: number,
  ) {
    const { buffer, mimetype } = await this.assetsService.getFileStream(id);

    res.setHeader('Content-Type', mimetype);

    return buffer;
  }

  @Get('assets/:id')
  @Get('assets/:id')
  async findOne(@Param('id') id: number) {
    return new GetFileRdo(await this.assetsService.findOne({ where: { id } }));
  }

  @Delete('assets/:id')
  async remove(@Param('id') id: number) {
    return await this.assetsService.deleteFile(id);
  }
}
