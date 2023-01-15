import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Card } from "./Card.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({type: 'varchar', length: '200', nullable: true})
    name: string;

    @Column({type: 'varchar', length: '100' ,nullable: false})
    email: string;

    @Column({type: 'varchar', nullable: false})
    password: string;

    @OneToMany(() => Card, (card) => card.owner)
    cards: Card[];
}