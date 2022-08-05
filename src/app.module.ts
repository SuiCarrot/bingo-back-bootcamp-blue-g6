import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MatchModule } from './match/match.module';
import { PlayerModule } from './player/player.module';

@Module({
  imports: [MatchModule, PlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
