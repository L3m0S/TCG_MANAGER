import { MigrationInterface, QueryRunner } from "typeorm"

export class default1696461001399 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        insert into users (user_name, name, email, password, admin)
        values ('admin', 'admin', 'admin@admin.com', '$05$PLiAGDIt..Y3.2F5Q0tHDOsSdMvZiKni9oFBa4vmrfqOhLLzPwdMe', true)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
