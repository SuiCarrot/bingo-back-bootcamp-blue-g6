import { ApiProperty } from "@nestjs/swagger";


export class CreateDrawnNumberDto {


    @ApiProperty({
        description: 'Numbers already drawn in this table.',
        example: []
    })
    drawnNumbers: number[]

    @ApiProperty({
        description: 'Last number drawn.',
        example: []
    })
    actualNumber: number

    @ApiProperty({
        description: 'Last 6 numbers drawn.',
        example: []
    })
    lastNumbers: number[]

    @ApiProperty({
        description: 'Base numbers for the draw.',
        example: []
    })
    baseNumbers: number[]

}
