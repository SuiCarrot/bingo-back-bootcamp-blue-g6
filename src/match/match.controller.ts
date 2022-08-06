import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new match.'
  })
  create(
    @Body() createMatchDto: CreateMatchDto) {
    return this.matchService.create(createMatchDto);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find one match by ID.',
  })
  findOne(@Param('id') id: string) {
    return this.matchService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete one match by ID',
  })
  remove(@Param('id') id: string) {
    return this.matchService.remove(id);
  }
}
