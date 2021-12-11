import {MigrationInterface, QueryRunner} from "typeorm";

export class init1639227026678 implements MigrationInterface {
    name = 'init1639227026678'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "gadget" ("id" SERIAL NOT NULL, "gadgetName" character varying NOT NULL, "gadgetType" character varying NOT NULL, "ownerId" integer, CONSTRAINT "PK_0498ae0e75a2324586e3d0ccdb5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "character" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying, "species" character varying NOT NULL, "age" integer NOT NULL, CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "gadget_characters_character" ("gadgetId" integer NOT NULL, "characterId" integer NOT NULL, CONSTRAINT "PK_ac2e470836c404303ec35a1ba7a" PRIMARY KEY ("gadgetId", "characterId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_051268e46da4f4aca384f5a50a" ON "gadget_characters_character" ("gadgetId") `);
        await queryRunner.query(`CREATE INDEX "IDX_cd69209bbec9b46871f9513276" ON "gadget_characters_character" ("characterId") `);
        await queryRunner.query(`ALTER TABLE "gadget" ADD CONSTRAINT "FK_e71bf268a7c5c16007b620653a7" FOREIGN KEY ("ownerId") REFERENCES "character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "gadget_characters_character" ADD CONSTRAINT "FK_051268e46da4f4aca384f5a50ab" FOREIGN KEY ("gadgetId") REFERENCES "gadget"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "gadget_characters_character" ADD CONSTRAINT "FK_cd69209bbec9b46871f9513276f" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "gadget_characters_character" DROP CONSTRAINT "FK_cd69209bbec9b46871f9513276f"`);
        await queryRunner.query(`ALTER TABLE "gadget_characters_character" DROP CONSTRAINT "FK_051268e46da4f4aca384f5a50ab"`);
        await queryRunner.query(`ALTER TABLE "gadget" DROP CONSTRAINT "FK_e71bf268a7c5c16007b620653a7"`);
        await queryRunner.query(`DROP INDEX "IDX_cd69209bbec9b46871f9513276"`);
        await queryRunner.query(`DROP INDEX "IDX_051268e46da4f4aca384f5a50a"`);
        await queryRunner.query(`DROP TABLE "gadget_characters_character"`);
        await queryRunner.query(`DROP TABLE "character"`);
        await queryRunner.query(`DROP TABLE "gadget"`);
    }

}
