import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DeckImage } from "./DeckImage.entity";
import { DeckCard } from "./DeckCard.entity";

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

    @Column()
    cover_image_id: string;

    @OneToMany(() => DeckCard, (deckCard) => deckCard.deck_id)
    cards: DeckCard[];
}