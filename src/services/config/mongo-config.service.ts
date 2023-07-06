import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';

export class MongoConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: 'mongodb+srv://khalilchettaoui06:0E5b1zp3MdtxWFqn@cluster0.ih0muwh.mongodb.net/?tls=true&tlsCertificateKeyFile=%2FUsers%2Fkhalil%2FDocuments%2FX509-cert-7573717406175880810.pem',
    };
  }
}
