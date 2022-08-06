import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Match } from 'src/match/entities/match.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error';
import { notFoundError } from 'src/utils/not-found';
import { CreatePlayerDto } from './dto/create-player.dto';

@Injectable()
export class PlayerService {
  constructor(private readonly prisma: PrismaService) {}
    async create(dto: CreatePlayerDto) {

      const data: Prisma.PlayerCreateInput = {
        playerName: dto.playerName,
        avatar: dto.avatar,
        isHost: dto.isHost,
        match: {connect: {id: dto.matchId}}
      }
      return await this.prisma.player.create({ data }).catch(handleError)
    }


    async findOne(id: string) {
      const record = await this.prisma.player.findUnique({ where: { id } });
  
      notFoundError(record, id);
      return record;
    }

    async remove(id: string) {
      await this.findOne(id);
  
      await this.prisma.player.delete({
        where: { id },
      });
      throw new HttpException('Player deleted', 204);
    }
}
