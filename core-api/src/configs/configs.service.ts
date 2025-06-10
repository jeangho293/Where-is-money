import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ConfigsService {
  constructor(private readonly config: ConfigService) {}

  get server() {
    const configs = {
      port: this.config.get<string>('MYSQL_PORT') || 3000,
    };

    this.checkUndefined(configs, 'server');
    return configs;
  }

  private checkUndefined(configs: Record<string, any>, name: string) {
    Object.entries(configs).forEach(([key, value]) => {
      if (value === undefined) {
        throw new Error(`The ${name}'s ${key} is undefined value. check please.`);
      }
    });
  }
}
