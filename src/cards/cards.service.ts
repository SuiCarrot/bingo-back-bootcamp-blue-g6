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
  numbers: string[];

  constructor(private readonly prisma: PrismaService){}


  async create(dto: CreateCardDto) {

    return await this.prisma.cards.create({
      data:{
        numbers: dto.numbers,
        bingoPossibilities: dto.bingoPossibilities,
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