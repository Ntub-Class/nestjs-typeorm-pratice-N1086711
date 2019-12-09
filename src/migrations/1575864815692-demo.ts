import {MigrationInterface, QueryRunner} from "typeorm";

export class demo1575864815692 implements MigrationInterface {
    name = 'demo1575864815692'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `phone`", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `user` ADD `phone` varchar(255) NOT NULL", undefined);
    }

}
