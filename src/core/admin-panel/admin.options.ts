import { UserEntity } from '#src/core/users/user.entity';
import { RolesEntity } from '#src/core/roles/entity/roles.entity';
import { SessionEntity } from '#src/core/session/session.entity';
import { authenticate } from '#src/core/admin-panel/admin-authenticate';
import { Section } from '#src/core/sections/entities/section.entity';
import { SectionsCategory } from '#src/core/sections-categories/entities/sections-category.entity';
import { EventCategory } from '#src/core/event-categories/entities/event-category.entity';
import { AssetEntity } from '#src/core/assets/entities/asset.entity';
import { Recommendations } from '#src/core/recommendations/entities/recommendations.entity';
import { Ground } from '#src/core/grounds/entities/ground.entity';

export const adminOptions = {
  adminJsOptions: {
    rootPath: '/admin',
    resources: [
      UserEntity,
      RolesEntity,
      SessionEntity,
      Section,
      SectionsCategory,
      EventCategory,
      AssetEntity,
      Recommendations,
      Ground,
    ],
  },
  auth: {
    authenticate,
    cookieName: 'adminjs',
    cookiePassword: 'secret',
  },
  sessionOptions: {
    resave: true,
    saveUninitialized: true,
    secret: 'secret',
  },
};
