import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return `Servidor Rodando! 🚀\n\n **PARA O SWAGGER** -> ir para a rota /api`;
  }
}
