import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUrl, IsUUID } from 'class-validator';


export class CreateCardDto {

    @ApiProperty({
        description: 'Numbers of this card',
        example: []
    })
    numbers: string[]

}