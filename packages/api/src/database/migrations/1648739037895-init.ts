import { MigrationInterface, QueryRunner } from 'typeorm'

export class init1648739037895 implements MigrationInterface {
  name = 'init1648739037895'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE "dummy" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying,
                "description" character varying,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                "deleted_at" TIMESTAMP,
                CONSTRAINT "PK_8a7fd4e47344e8cfa61be2098af" PRIMARY KEY ("id")
            )
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE "dummy"
        `)
  }
}
