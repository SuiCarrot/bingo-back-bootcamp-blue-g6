import { BadRequestException } from '@nestjs/common';

export function handleError(error: Error): undefined {
  const errorLines = error.message?.split('\n');
  const lastErrorLine = errorLines[errorLines.length - 1].trim();

  if (!lastErrorLine) {
    console.log(error);
  }

  throw new BadRequestException(
    lastErrorLine ||
      'Opa, ocorreu um pequeno erro. Por favor atualize a pagina e tente novamente.',
  );
}
