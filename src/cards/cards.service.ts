import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Cards } from '../types/cards';
import { type } from 'os';
import { PrismaService } from 'src/prisma/prisma.service';
import { Numbers } from 'src/services/numbers';
import { handleError } from 'src/utils/handle-error';
import { notFoundError } from 'src/utils/not-found';
import { CreateCardDto } from './dto/create-card.dto';
import { connect } from 'http2';

@Injectable()
export class CardsService {

  constructor(private readonly prisma: PrismaService){}
/*   async create(dto: CreateCardDto): Promise<Cards> {
    let 
      numero = new Numbers(),
      cardNumber = numero.cardNumbers()

    const data: Prisma.CardsCreateInput = {
      numbers: cardNumber,
      bingoPossibilities: numero.bingoPossibilities(cardNumber),
    }
    return await this.prisma.cards.create({data}).catch(handleError);
  } */

  async create(dto: CreateCardDto) {

    let 
      numero = new Numbers(),
      cardNumber = numero.cardNumbers()

    return await this.prisma.cards.create({
      data:{
        numbers: cardNumber,
        bingoPossibilities: numero.bingoPossibilities(cardNumber),
        player: {
          select: {
            id: true,
            name: true,
            _count: { select: { player: true } },
          },
        },
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