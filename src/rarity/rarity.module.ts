import { Module } from '@nestjs/common';
import { RarityController } from './rarity.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rarity } from './entity/rarity.entity';
import { RarityService } from './rarity.service';

@Module({
  imports: [TypeOrmModule.forFeature([Rarity])],
  controllers: [RarityController],
  providers: [RarityService]
})
export class RarityModule { }
