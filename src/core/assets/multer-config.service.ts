import { Injectable } from '@nestjs/common';
import {
  MulterModuleOptions,
  MulterOptionsFactory,
} from '@nestjs/platform-express';
import multer from 'multer';
import { Request } from 'express';
import { storageConfig } from '#src/common/configs/storage.config';
import { extname, join } from 'path';
import { uid } from 'uid/secure';

@Injectable()
export class MulterConfigService implements MulterOptionsFactory {
  createMulterOptions(): Promise<MulterModuleOptions> | MulterModuleOptions {
    return {
      storage: multer.diskStorage({
        destination: (req, file, callback) => {
          if (!this.checkMimetype(file.mimetype)) {
            return callback(new Error('file extension is not allowed'), '');
          }

          if (req.url.includes('users')) {
            return callback(
              null,
              join(storageConfig.path, storageConfig.innerAvatars),
            );
          } else if (req.url.includes('events')) {
            return callback(null, join(storageConfig.path, 'events'));
          } else if (req.url.includes('sections')) {
            return callback(null, join(storageConfig.path, 'sections'));
          } else if (req.url.includes('news')) {
            return callback(null, join(storageConfig.path, 'news'));
          }

          return callback(new Error('not allowed'), '');
        },
        filename(
          req: Request,
          file: Express.Multer.File,
          callback: (error: Error | null, filename: string) => void,
        ) {
          callback(
            null,
            `${uid(storageConfig.nameLength)}${extname(file.originalname)}`,
          );
        },
      }),
    };
  }

  private checkMimetype(mimetype: string): boolean {
    return storageConfig.allowedMimetypes.includes(mimetype);
  }
}
