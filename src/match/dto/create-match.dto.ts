import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from 'class-validator';



export class CreateMatchDto {
    @IsString()
    @ApiProperty({
        description: 'Name of the match.',
        example: 'Matchname'
    })
    roomName: string

    @IsNumber()
    @ApiProperty({
        description: 'Number of cards of the players.',
        example: '2'
    })
    numberOfCards: number

    @IsNumber()
    @ApiProperty({
        description: 'Time between each draw.',
        example: '2'
    })
    drawTime: number

    @IsNumber()
    @ApiProperty({
        description: 'Number of rounds of the match.',
        example: '2'
    })
    numberOfRounds: number

    @IsString()
    @ApiProperty({
        description: 'Numbers already draw in this game.',
        example: '[23,56,30,81,34]'
    })
    drawNumbers: string

    @IsString()
    @ApiProperty({
        description: 'Link to join the match.',
        example: '2'
    })
    link: string

    @IsString()
    @ApiProperty({
        description: 'Winner of the match.',
        example: '2'
    })
    winner: string

/*     @IsString()
    @ApiProperty({
        description: 'Number of players in the match.',
        example: '1'
    })
    players: number */
}
