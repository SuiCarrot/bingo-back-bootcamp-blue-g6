import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { MatchModule } from './match/match.module';
import { CardsModule } from './cards/cards.module';
import { DrawnnumbersModule } from './drawnnumbers/drawnnumbers.module';


@Module({
  imports: [PlayerModule, MatchModule, CardsModule, DrawnnumbersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}