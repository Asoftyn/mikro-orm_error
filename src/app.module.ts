import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

import { CommonModule } from './common/common.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [MikroOrmModule.forRoot()
    , UserModule, CommonModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
