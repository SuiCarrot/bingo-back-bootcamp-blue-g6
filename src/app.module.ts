import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { MatchModule } from './match/match.module';
import { CardsModule } from './cards/cards.module';
import { DrawnNumbersModule } from './drawn-numbers/drawn-numbers.module';


@Module({
  imports: [PlayerModule, MatchModule, CardsModule, DrawnNumbersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}