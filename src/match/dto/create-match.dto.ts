import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsUrl } from 'class-validator';



export class CreateMatchDto {
    @IsString()
    @ApiProperty({
        description: 'Name of the match',
        example: 'Matchname'
    })
    roomName: string

    @IsString()
    @ApiProperty({
        description: 'Number of cards of the players',
        example: '2'
    })
    numberOfCards: number

    @IsString()
    @ApiProperty({
        description: 'Players in the match',
        example: '1'
    })
    players: number
}
