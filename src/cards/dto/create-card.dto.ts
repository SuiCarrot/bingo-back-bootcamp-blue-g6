import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl, IsUUID } from 'class-validator';


export class CreateCardDto {
    @IsString()
    @ApiProperty({
        description: 'Numbers of this card',
        example: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]'
    })
    numbers: string[]

    @IsString()
    @ApiProperty({
        description: 'Possibilities of Bingo in this card',
        example: '[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24]]'
    })
    bingoPossibilities: string[][]

    @IsString()
    @ApiProperty({
      description: 'PlayerID that owns this card',
      example: '88abbad8-1b0e-417a-ae5e-0317b0cff8b2',
    })
    playerId: string;

}