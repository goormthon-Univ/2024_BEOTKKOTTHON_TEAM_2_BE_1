import { Global, Module } from '@nestjs/common';
import { RestaurantModule } from './restaurant/restaurant.module';
import { GroupMuckatModule } from './groupmuckat/groupmuckat.module';
// import { PersonalMuckatModule } from './personalmuckat/personalmuckat.module';
// import { FavoriteModule } from './favorite/favorite.module';
import { GroupmuckatImageModule } from './groupmuckat-image/groupmuckat-image.module';
// import { PersonalmuckatImageModule } from './personalmuckat-image/personalmuckat-image.module';
import { UserModule } from './user/user.module';
import { PrismaClient } from '@prisma/client';

@Global()
@Module({
  imports: [
    RestaurantModule,
    GroupMuckatModule,
    // PersonalMuckatModule,
    // FavoriteModule,
    GroupmuckatImageModule,
    // PersonalmuckatImageModule,
    UserModule,
  ],
  controllers: [],
  providers: [PrismaClient],
  exports: [PrismaClient],
})
export class AppModule {
}
