import { MigrationInterface, QueryRunner } from 'typeorm';

export class postEntitiyUpdate1687411400224 implements MigrationInterface {
  name = 'postEntitiyUpdate1687411400224';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "createdAt"`);
  }
}
