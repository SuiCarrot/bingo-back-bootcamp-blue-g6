import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdatePlayerDto } from './dto/update-player.dto';


@ApiTags('Players')
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

  @Get()
  @ApiOperation({
    summary: 'Get all the players.',
  })
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find one player by ID.',
  })
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update one player with new info.',
  })
  update(@Param('id') id: string, @Body() dto: UpdatePlayerDto) {
    return this.playerService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete one player by ID',
  })
  remove(@Param('id') id: string) {
    return this.playerService.remove(id);
  }
}