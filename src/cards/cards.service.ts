import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error';
import { notFoundError } from 'src/utils/not-found';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {

  constructor(private readonly prisma: PrismaService){}
  async create(dto: CreateCardDto) {

    const data: Prisma.CardsCreateInput = {
      numbers: dto.numbers,
      bingoPossibilities: dto.bingoPossibilities,
    }
    return await this.prisma.cards.create({data}).catch(handleError);
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