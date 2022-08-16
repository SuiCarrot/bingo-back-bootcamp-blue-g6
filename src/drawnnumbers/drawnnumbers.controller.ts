import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DrawnnumbersService } from './drawnnumbers.service';
import { CreateDrawnnumberDto } from './dto/create-drawnnumber.dto';
import { UpdateDrawnnumberDto } from './dto/update-drawnnumber.dto';

@Controller('drawnnumbers')
export class DrawnnumbersController {
  constructor(private readonly drawnnumbersService: DrawnnumbersService) {}

  @Post()
  create(@Body() createDrawnnumberDto: CreateDrawnnumberDto) {
    return this.drawnnumbersService.create(createDrawnnumberDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.drawnnumbersService.findOne(+id);
  }

  @Get(':id')
  draw(@Param('id') id: string) {
    return this.drawnnumbersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDrawnnumberDto: UpdateDrawnnumberDto) {
    return this.drawnnumbersService.update(+id, updateDrawnnumberDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.drawnnumbersService.remove(+id);
  }
}
