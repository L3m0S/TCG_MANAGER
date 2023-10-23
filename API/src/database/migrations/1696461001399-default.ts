import { MigrationInterface, QueryRunner } from "typeorm"

export class default1696461001399 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query(`
        insert into users (user_name, name, email, password, admin)
        values ('admin', 'admin', 'admin@admin.com', '$2b$05$VkX7u4d.mU5KsniQi04nUum/WO0Ri9IUoUx/mpy13IndqefR9deU6', true)`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
