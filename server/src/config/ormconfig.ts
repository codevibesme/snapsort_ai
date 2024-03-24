import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { entities } from 'src/modules/entities.export';

export const ormconfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.SNAPSORT_DB_HOST,
  port: parseInt(process.env.SNAPSORT_DB_PORT),
  username: process.env.SNAPSORT_DB_USERNAME,
  password: process.env.SNAPSORT_DB_PASSWORD,
  database: process.env.SNAPSORT_DB_NAME,
  entities: entities,
  synchronize: true,
  dropSchema: false,
  timezone: 'local',
  dateStrings: ['DATE', 'DATETIME'],
  connectTimeout: 50000,
  extra: {
    connectionLimit: 10,
    waitForConnections: true,
    queueLimit: 0,
  },
};
