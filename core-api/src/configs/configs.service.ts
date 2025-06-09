import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigsService {
  constructor(private readonly configService: NestConfigService) {}

  get server() {
    const configs = {
      port: this.configService.get<string>('SERVER_PORT') || 3000,
    };

    return configs;
  }

  private checkUndefined(configs: Record<string, any>, name: string) {
    Object.entries(configs).forEach(([key, value]) => {
      if (value === undefined) {
        throw new Error(`The ${name}'s ${key} value is undefined., check please.`);
      }
    });
  }
}
