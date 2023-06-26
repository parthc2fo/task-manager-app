import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { PostEntity } from './post.entity';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PostEntity])],
      resolvers: [{ DTOClass: PostDto, EntityClass: PostEntity }],
    }),
  ],
})
export class PostModule {}
