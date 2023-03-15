import { MigrationInterface, QueryRunner } from "typeorm";

export class default1676590819182 implements MigrationInterface {
    name = 'default1676590819182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deck_image" DROP CONSTRAINT "FK_9fc46b510ed2a74201116505a3f"`);
        await queryRunner.query(`CREATE TABLE "decks" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(200), CONSTRAINT "PK_981894e3f8dbe5049ac59cb1af1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "deck_image" ADD CONSTRAINT "FK_9fc46b510ed2a74201116505a3f" FOREIGN KEY ("deck_id") REFERENCES "decks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deck_image" DROP CONSTRAINT "FK_9fc46b510ed2a74201116505a3f"`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`DROP TABLE "decks"`);
        await queryRunner.query(`ALTER TABLE "deck_image" ADD CONSTRAINT "FK_9fc46b510ed2a74201116505a3f" FOREIGN KEY ("deck_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
