import { Module } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsModule } from './cards/cards.module';
import { RarityModule } from './rarity/rarity.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    AccountModule,
    CardsModule,
    RarityModule],
})
export class AppModule { }
