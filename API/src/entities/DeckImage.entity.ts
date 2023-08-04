import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Deck } from "./Deck.entity";

@Entity('deck_images')
export class DeckImage {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    url: string;

    @Column()
    name: string;

    @Column()
    original_name: string;

    @JoinColumn({ name: 'deck_id' })
    @OneToOne(() => Deck, (deck) => deck.deck_image)
    deck: Deck;
}