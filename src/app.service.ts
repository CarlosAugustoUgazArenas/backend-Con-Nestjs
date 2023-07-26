import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHola() {
    return 'Hola';
  }
}
