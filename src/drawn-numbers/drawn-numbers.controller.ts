import { Controller, Get, Post, Body, Patch, Param, Delete, Query} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DrawnNumbersService } from './drawn-numbers.service';
import { CreateDrawnNumberDto } from './dto/create-drawn-number.dto';
import { UpdateDrawnNumberDto } from './dto/update-drawn-number.dto';

@ApiTags('Drawn Numbers')
@Controller('drawn-numbers')
export class DrawnNumbersController {
  constructor(private readonly drawnNumbersService: DrawnNumbersService) {}

  @Post()
  @ApiOperation({
    summary: 'Create one table of numbers to be drawn',
  })
  create(
    @Body() createDrawnNumberDto: CreateDrawnNumberDto) {
    return this.drawnNumbersService.create(createDrawnNumberDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all the tables of numbers.',
  })
  findAll() {
    return this.drawnNumbersService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Draw one number and add to the already drawn numbers.',
  })
  findOne(@Param('id') id: string) {
    return this.drawnNumbersService.findOne(id);
  }

  @Get('checkVictory/check')
  @ApiOperation({
    summary: 'in construction, DON`T USE',
  })
  checkVictory(
    @Query('cardId') cardId: string,
    @Query('drawnNumbersId') drawnNumbersId: string
  ) {
    return this.drawnNumbersService.checkVictory(cardId, drawnNumbersId);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update onde of the tables with new values.',
  })
  update(@Param('id') id: string, @Body() updateDrawnNumberDto: UpdateDrawnNumberDto) {
    return this.drawnNumbersService.update(id, updateDrawnNumberDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete one table of numbers.',
  })
  remove(@Param('id') id: string) {
    return this.drawnNumbersService.remove(id);
  }
}
