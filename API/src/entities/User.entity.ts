import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({type: 'varchar', length: '200', nullable: false})
    name: string;

    @Column({type: 'varchar', length: '100' ,nullable: false})
    email: string;

    @Column({type: 'varchar', nullable: false})
    password: string;
}