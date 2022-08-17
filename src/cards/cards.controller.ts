import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CardsService } from './cards.service';
import { CreateCardDto } from './dto/create-card.dto';


@ApiTags('Cards')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create one card.',
  })
  create(
    @Body() createCardDto: CreateCardDto) {
    return this.cardsService.create(createCardDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get all the cards.',
  })
  findAll() {
    return this.cardsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Find one card by ID.',
  })
  findOne(@Param('id') id: string) {
    return this.cardsService.findOne(id);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete one card by ID',
  })
  remove(@Param('id') id: string) {
    return this.cardsService.remove(id);
  }
}