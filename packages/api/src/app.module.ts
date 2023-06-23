import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { dbConfig } from '../config/db-config';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
