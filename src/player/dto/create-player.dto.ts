
import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl, IsUUID } from 'class-validator';



export class CreatePlayerDto {
    @IsString()
    @ApiProperty({
        description: 'Player name',
        example: 'Capivara James'
    })
    playerName: string

    @IsUrl()
    @ApiProperty({
        description: 'Avatar of player, needs to be an URL',
        example: 'https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/cb208be7dd3f15c6831d98c1a36b441c.jpg'
    })
    avatar: string

    @IsNumber()
    @ApiProperty({
        description: 'Score of the player.',
        example: '3'
    })
    score: number
    
    @ApiProperty({
        description: 'Is this player the host?',
        example: false,
      })
    isHost: boolean;

    @IsUUID()
    @ApiProperty({
      description: 'ID of the match this player is in.',
      example: 'e0673bf6-a645-418f-a91e-95a60c3bf9a9',
    })
    matchId: string;

}
