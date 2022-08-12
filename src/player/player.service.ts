/* eslint-disable prettier/prettier */
import { HttpException, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error';
import { notFoundError } from 'src/utils/not-found';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {
  constructor(private readonly PrismaClient: PrismaService) {}
    async create(dto: CreatePlayerDto) {

      const data: Prisma.PlayerCreateInput = {
        name: dto.name,
        avatar: dto.avatar,
        score: dto.score,
        isHost: dto.isHost,
      }
      return await this.PrismaClient.player.create({ data }).catch(handleError)
    }


    async findOne(id: string) {
      const record = await this.PrismaClient.player.findUnique({ where: { id } });
  
      notFoundError(record, id);
      return record;
    }

    async update(id: string, dto: UpdatePlayerDto) {
      await this.findOne(id);
  
      const data: Prisma.PlayerUpdateInput = {
        name: dto.name,
        avatar: dto.avatar,
        score: dto.score,
        isHost: dto.isHost,
      };
  
      return this.PrismaClient.player
        .update({
          where: { id },
          data,
        })
        .catch(handleError);
    }

    async remove(id: string) {
      await this.findOne(id);
  
      await this.PrismaClient.player.delete({
        where: { id },
      });
      throw new HttpException('Player deleted', 204);
    }
}