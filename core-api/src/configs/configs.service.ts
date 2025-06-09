import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

@Injectable()
export class ConfigsService {
  constructor(private readonly configService: NestConfigService) {}

  get mysql() {
    const configs: TypeOrmModuleOptions = {
      type: 'mysql',
      host: this.configService.get<string>('MYSQL_HOST'),
      username: this.configService.get<string>('MYSQL_USERNAME'),
      password: this.configService.get<string>('MYSQL_PASSWORD'),
      database: this.configService.get<string>('MYSQL_DATABASE'),
      port: 3306,
    };

    this.checkUndefined(configs, 'mysql');
    return configs;
  }

  get server() {
    const configs = {
      port: this.configService.get<string>('SERVER_PORT') || 3000,
    };

    this.checkUndefined(configs, 'server');
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
