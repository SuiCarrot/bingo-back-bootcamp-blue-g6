import { Module } from '@nestjs/common';
import { DrawnnumbersService } from './drawnnumbers.service';
import { DrawnnumbersController } from './drawnnumbers.controller';

@Module({
  controllers: [DrawnnumbersController],
  providers: [DrawnnumbersService]
})
export class DrawnnumbersModule {}
