import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error';
import { notFoundError } from 'src/utils/not-found';
import { CreateMatchDto } from './dto/create-match.dto';

@Injectable()
export class MatchService {
  constructor(private readonly prisma: PrismaService) {}
  async create(dto: CreateMatchDto) {

    const data: Prisma.MatchCreateInput = {
      roomName: dto.roomName,
      numberOfCards: dto.numberOfCards,
    }
    return await this.prisma.match.create({ data }).catch(handleError)
  }

  async findOne(id: string) {
    const record = await this.prisma.match.findUnique({ where: { id } });

    notFoundError(record, id);
    return record;
  }

  async remove(id: string) {
    await this.findOne(id);

    await this.prisma.match.delete({
      where: { id },
    });
    throw new HttpException('Match deleted', 204);
  }
}
