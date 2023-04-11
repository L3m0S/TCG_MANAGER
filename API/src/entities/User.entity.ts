import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ nullable: false, unique: true })
    user_name: string;

    @Column({ type: 'varchar', length: '200', nullable: false })
    name: string;

    @Column({ type: 'varchar', length: '100', nullable: false })
    email: string;

    @Column({ type: 'varchar', nullable: false, select: false })
    password: string;

    @Column({ nullable: false, default: 0 })
    experience_level: number;

}