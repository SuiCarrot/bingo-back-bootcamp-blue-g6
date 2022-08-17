import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CardsService } from 'src/cards/cards.service';
import Globe from 'src/Classes/Globe';
import { PrismaService } from 'src/prisma/prisma.service';
import { notFoundError } from 'src/utils/not-found';
import { CreateDrawnNumberDto } from './dto/create-drawn-number.dto';
import { UpdateDrawnNumberDto } from './dto/update-drawn-number.dto';

@Injectable()
export class DrawnNumbersService {

  constructor (private readonly prisma: PrismaService, private readonly card: CardsService){ }

  async create(dto: CreateDrawnNumberDto) {
    let 
      globe = new Globe()
    
    return await this.prisma.drawnNumbers.create({
      data:{
        drawnNumbers: [],
        actualNumber: 0,
        lastNumbers: [],
        baseNumbers: globe.remainingNumbers
      }
    });
  }

  async checkVictory(id: string){
    let card = await this.card.findOne(id)

    return card
  }

  async findAll() {
    const list = await this.prisma.drawnNumbers.findMany();

    if (list.length === 0) {
    throw new NotFoundException(
      "There's no tables of numbers created yet."
    )};

    return list
  }

  async findOne(id: string) {
    const record = await  this.prisma.drawnNumbers.findUnique({where:{id}});

    notFoundError(record, id)

    return record;
  }

  async update(id: string, dto: UpdateDrawnNumberDto) {
    let 
      globe = new Globe(),
      drawnNumbers = (await this.findOne(id)).drawnNumbers,
      baseNumbers = (await this.findOne(id)).baseNumbers,
      drawNumber = globe.drawNumber(baseNumbers, drawnNumbers)

    await this.findOne(id);

    const data = {
      actualNumber: drawNumber.draw,
      drawnNumbers: drawNumber.drawnNumbers,
      lastNumbers: globe.lastNumbers(drawnNumbers),
      baseNumbers: drawNumber.remainingNumbers
      };

    return this.prisma.drawnNumbers.update({
      where:{ id },
      data
    })

  }

  async remove(id: string) {
    await this.findOne(id);

    await this.prisma.drawnNumbers.delete({
      where: { id },
    })

    return new HttpException('Match deleted', 204);

  }
}
