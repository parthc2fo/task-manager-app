import {MigrationInterface, QueryRunner} from "typeorm";

export class postEntityUpdate1687506189099 implements MigrationInterface {
    name = 'postEntityUpdate1687506189099'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "created" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "updated" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "updated"`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "created"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "post" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

}
