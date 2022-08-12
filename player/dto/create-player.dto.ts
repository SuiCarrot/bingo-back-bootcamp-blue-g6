import { ApiProperty } from '@nestjs/swagger';

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
}
