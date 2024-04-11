import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '#src/common/configs/database.config';
import { AuthModule } from '#src/core/auth/auth.module';
import { UserModule } from '#src/core/users/user.module';
import { RolesModule } from '#src/core/roles/roles.module';
import { SectionsCategoriesModule } from '#src/core/sections-categories/sections-categories.module';
import { SectionsModule } from '#src/core/sections/sections.module';
import { RecommendationsModule } from '#src/core/recommendations/recommendations.module';
import { EventsModule } from '#src/core/events/events.module';
import { EventCategoriesModule } from '#src/core/event-categories/event-categories.module';
import { AssetsModule } from '#src/core/assets/assets.module';
import { GroundsModule } from '#src/core/grounds/grounds.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    AuthModule,
    UserModule,
    RolesModule,
    SectionsCategoriesModule,
    SectionsModule,
    RecommendationsModule,
    EventsModule,
    EventCategoriesModule,
    AssetsModule,
    GroundsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
