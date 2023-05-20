import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfigGeneral: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: +(process.env.POSTGRES_PORT || 5432),
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '123456',
  database: process.env.POSTGRES_DATABASE || 'admin',
  synchronize: process.env.POSTGRES_SYNCHRONIZE === 'true' ?? true,
  migrationsRun: process.env.NODE_ENV === 'test' ? false : true,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'each',
  keepConnectionAlive: true,
  logging: process.env.POSTGRES_LOGGING === 'true' ? true : false,
};
console.log('entered');

export const typeOrmConfig: TypeOrmModuleOptions = {
  migrations: [`${__dirname}/../../database/migrations/**/*.ts`],
  entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
  ...typeOrmConfigGeneral,
};
