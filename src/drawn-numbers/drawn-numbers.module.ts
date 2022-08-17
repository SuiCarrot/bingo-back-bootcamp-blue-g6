import { Module } from '@nestjs/common';
import { DrawnNumbersService } from './drawn-numbers.service';
import { DrawnNumbersController } from './drawn-numbers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CardsModule } from 'src/cards/cards.module';

@Module({
  imports: [PrismaModule, CardsModule],
  controllers: [DrawnNumbersController],
  providers: [DrawnNumbersService]
})
export class DrawnNumbersModule {}
