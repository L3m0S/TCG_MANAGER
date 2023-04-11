import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Deck } from "./Deck.entity";
import { User } from "./User.entity";

@Entity('deck_images')
export class DeckImage {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @JoinColumn({ name: 'deck_id' })
    @ManyToOne(() => Deck, (deck) => deck.cards)
    owner: User;
}