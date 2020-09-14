import { Module } from '@nestjs/common';
import { BaseEntity } from './entities/base-entity.entity';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
    imports: [MikroOrmModule.forFeature([BaseEntity])]
})
export class CommonModule { }
