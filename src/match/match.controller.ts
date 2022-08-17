import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MatchService } from './match.service';
import { CreateMatchDto } from './dto/create-match.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UpdateMatchDto } from './dto/update-match.dto';

@ApiTags('Match')
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

  @Get()
  @ApiOperation({
    summary: 'Get all the matchs.',
  })
  findAll() {
    return this.matchService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find one match by ID.',
  })
  findOne(@Param('id') id: string) {
    return this.matchService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Edit the match with new info.',
  })
  update(@Param('id') id: string, @Body() dto: UpdateMatchDto) {
    return this.matchService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete one match by ID',
  })
  remove(@Param('id') id: string) {
    return this.matchService.remove(id);
  }
}