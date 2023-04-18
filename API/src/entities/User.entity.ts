import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Deck } from "./Deck.entity";

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

    @Column({ type: 'varchar', length: '100', nullable: false, unique: true })
    email: string;

    @Column({ type: 'varchar', nullable: false, select: false })
    password: string;

    @Column({ nullable: false, default: 0 })
    experience_level: number;

    @Column({ nullable: false, default: false })
    admin: boolean;

    @OneToMany(() => Deck, deck => deck.user_id)
    created_decks: Deck[];


}