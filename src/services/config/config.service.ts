export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {
      port: 3003,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
