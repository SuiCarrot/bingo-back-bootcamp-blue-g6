import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new player.'
  })
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find one player by ID.',
  })
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete one player by ID',
  })
  remove(@Param('id') id: string) {
    return this.playerService.remove(id);
  }
}
