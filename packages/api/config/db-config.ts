import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345',
  database: 'reddit_app',
  dropSchema: false,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrationsTableName: 'migrations',
};
