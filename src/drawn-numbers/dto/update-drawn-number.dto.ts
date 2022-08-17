import { PartialType } from '@nestjs/swagger';
import { CreateDrawnNumberDto } from './create-drawn-number.dto';

export class UpdateDrawnNumberDto extends PartialType(CreateDrawnNumberDto) {}
