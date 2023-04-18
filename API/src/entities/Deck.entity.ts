import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DeckImage } from "./DeckImage.entity";
import { DeckCard } from "./DeckCard.entity";
import { User } from "./User.entity";

@Entity('decks')
export class Deck {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'varchar', length: '200', nullable: true })
    name: string;

    @Column({ nullable: true })
    description: string;

    @Column({ nullable: true })
    difficulty: number;

    @OneToMany(() => DeckCard, (deckCard) => deckCard.deck_id)
    cards: DeckCard[];

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User, user => user.created_decks)
    user_id: number;
}