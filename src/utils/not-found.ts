import { NotFoundException } from '@nestjs/common';

export function notFoundError(data: any, id: string): void {
  if (!data || data.length === 0) {
    throw new NotFoundException(
      `Registro com o Id '${id}' não encontrado ou é inválido. `,
    );
  }
}
