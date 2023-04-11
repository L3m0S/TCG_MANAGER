import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Deck } from "./Deck.entity";

@Entity('deck_cards')
export class DeckCard {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    card_id: string;

    @JoinColumn({ name: 'deck_id' })
    @ManyToOne(() => Deck, (deck) => deck.cards)
    deck_id: Deck;
}