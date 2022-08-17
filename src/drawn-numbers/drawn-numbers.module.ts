import { Module } from '@nestjs/common';
import { DrawnNumbersService } from './drawn-numbers.service';
import { DrawnNumbersController } from './drawn-numbers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [DrawnNumbersController],
  providers: [DrawnNumbersService]
})
export class DrawnNumbersModule {}
