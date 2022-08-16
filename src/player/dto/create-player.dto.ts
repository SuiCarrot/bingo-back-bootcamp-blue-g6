import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class CreatePlayerDto {
  @ApiProperty({
    description: 'Npme dpo jogador',
    example: 'Honaru Dinyu',
  })
  name: string;

  @ApiProperty({
    description: 'Avatar do jogador',
    example: 'link da imagem',
  })
  avatar: string;

  @ApiProperty({
    description: 'pontuaçao do jogador',
    example: 2,
  })
  score: number;

  @ApiProperty({
    description: 'Declaração de host',
    example: false,
  })
  isHost: boolean;

  @IsUUID()
  @ApiProperty({
    description: 'Match ID.',
    example: '88abbad8-1b0e-417a-ae5e-0317b0cff8b2',
  })
  matchId: string;
}
