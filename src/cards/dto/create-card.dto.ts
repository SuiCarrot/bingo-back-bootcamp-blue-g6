import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl, IsUUID } from 'class-validator';


export class CreateCardDto {
    @IsString()
    @ApiProperty({
        description: 'Numbers of this card',
        example: '[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]'
    })
    numbers: string

    @IsString()
    @ApiProperty({
        description: 'Possibilities of Bingo in this card',
        example: '[[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24]]'
    })
    bingoPossibilities: string

    @IsUUID()
    @ApiProperty({
      description: 'ID of the match where this card appears.',
      example: 'e0673bf6-a645-418f-a91e-95a60c3bf9a9',
    })
    matchId: string;

    @IsUUID()
    @ApiProperty({
      description: 'ID of the player that ons this card.',
      example: 'e0673bf6-a645-418f-a91e-95a60c3bf9a9',
    })
    playerId: string;

}
