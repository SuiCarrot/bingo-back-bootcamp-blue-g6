import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl, IsUUID } from 'class-validator';


export class CreateCardDto {

    @ApiProperty({
        description: 'Numbers of this card',
        example: []
    })
    numbers: number[]

@IsUUID()
  @ApiProperty({
    description: 'Player ID',
    example: '88abbad8-1b0e-417a-ae5e-0317b0cff8b2',
  })
  playerId: string;

}