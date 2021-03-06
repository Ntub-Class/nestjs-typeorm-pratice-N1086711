import {MigrationInterface, QueryRunner} from "typeorm";

export class demo1575864257885 implements MigrationInterface {
    name = 'demo1575864257885'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `address` varchar(255) NOT NULL, `phone` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}
