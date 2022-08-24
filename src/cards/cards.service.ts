import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
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
        player:{
          connect:{
            id: dto.playerId,
          }
        }
      }
    })
  }

  async findAll() {
    const list = await this.prisma.cards.findMany();

    if (list.length === 0) {
    throw new NotFoundException(
      "There's no tables of numbers created yet."
    )};

    return list
  }

  async findOne(id: string) {
    const record = await this.prisma.cards.findUnique({ where: { id } });

    notFoundError(record, id);
    return record;
  }

  async createCards(qtty: number, playerId: string) {
    const 
      qtdade = qtty,
      cards=[],
      data = {
        "numbers": [],
        "playerId": `${playerId}`
      }

    for(let i=0; i<qtdade; i++){
      let card = await this.create(data)

      cards.push(card)
    }

    return cards
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.prisma.cards.delete({
      where: { id },
    })
    return new HttpException('Match deleted', 204);

  }
}