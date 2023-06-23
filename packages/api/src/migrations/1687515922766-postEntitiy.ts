import { MigrationInterface, QueryRunner } from 'typeorm';

export class postEntitiy1687515922766 implements MigrationInterface {
  name = 'postEntitiy1687515922766';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "post_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_58a149c4e88bf49036bc4c8c79f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "post_entity"`);
  }
}
