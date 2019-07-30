import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

import { Cats } from '../model/cats.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cats])],
  providers: [CatsService],
  controllers: [CatsController],
  exports: [CatsService]
})
export class CatsModule {

}