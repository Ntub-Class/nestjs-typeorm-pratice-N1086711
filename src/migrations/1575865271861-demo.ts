import {MigrationInterface, QueryRunner} from "typeorm";

export class demo1575865271861 implements MigrationInterface {
    name = 'demo1575865271861'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `phone` int NOT NULL", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `phone`", undefined);
    }

}
