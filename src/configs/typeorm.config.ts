import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';
import * as dotenv from 'dotenv';

dotenv.config();
const dbConfig = config.get('db');

export const typeORMConfig: TypeOrmModuleOptions = {
  type: process.env.type || dbConfig.type,
  host: process.env.DB_HOST || dbConfig.host,
  port: process.env.DB_PORT || dbConfig.port,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PW,
  database: process.env.DB || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
