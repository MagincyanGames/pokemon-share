import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entity/card.entity';
import { Rarity } from 'src/rarity/entity/rarity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card, Rarity])],
  controllers: [CardsController],
  providers: [CardsService]
})
export class CardsModule {
}
