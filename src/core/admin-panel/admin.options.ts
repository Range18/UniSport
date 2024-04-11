import { UserEntity } from '#src/core/users/user.entity';
import { RolesEntity } from '#src/core/roles/entity/roles.entity';
import { SessionEntity } from '#src/core/session/session.entity';
import { authenticate } from '#src/core/admin-panel/admin-authenticate';
import { Section } from '#src/core/sections/entities/section.entity';
import { SectionsCategory } from '#src/core/sections-categories/entities/sections-category.entity';

export const adminOptions = {
  adminJsOptions: {
    rootPath: '/admin',
    resources: [
      UserEntity,
      RolesEntity,
      SessionEntity,
      Section,
      SectionsCategory,
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
