import { Injectable } from '@nestjs/common';
import { CreateDrawnnumberDto } from './dto/create-drawnnumber.dto';
import { UpdateDrawnnumberDto } from './dto/update-drawnnumber.dto';

@Injectable()
export class DrawnnumbersService {
  create(createDrawnnumberDto: CreateDrawnnumberDto) {
    return 'This action adds a new drawnnumber';
  }

  findOne(id: string) {
    return `This action returns a #${id} drawnnumber`;
  }

  draw(id: string){
    
  }

  update(id: string, updateDrawnnumberDto: UpdateDrawnnumberDto) {
    return `This action updates a #${id} drawnnumber`;
  }

  remove(id: string) {
    return `This action removes a #${id} drawnnumber`;
  }
}
