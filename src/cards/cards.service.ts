import { HttpException, Injectable } from '@nestjs/common';
import Card from 'src/Classes/Card';
import { PrismaService } from 'src/prisma/prisma.service';
import { notFoundError } from 'src/utils/not-found';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
  constructor(private readonly prisma: PrismaService){}

  async create(dto: CreateCardDto) {   
    let cardNumbers = new Card()
    
    return await this.prisma.cards.create({
      data:{
        numbers: cardNumbers.numbers,
      }
    })
  }

  async findOne(id: string) {
    const record = await this.prisma.cards.findUnique({ where: { id } });

    notFoundError(record, id);
    return record;
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.cards.delete({
      where: { id },
    })
    throw new HttpException('Match deleted', 204);
  }
}