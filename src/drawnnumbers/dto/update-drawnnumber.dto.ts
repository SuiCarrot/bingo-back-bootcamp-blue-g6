import { PartialType } from '@nestjs/swagger';
import { CreateDrawnnumberDto } from './create-drawnnumber.dto';

export class UpdateDrawnnumberDto extends PartialType(CreateDrawnnumberDto) {}
