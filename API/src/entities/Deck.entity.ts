import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DeckCard } from "./DeckCard.entity";
import { User } from "./User.entity";
import { DeckImage } from "./DeckImage.entity";

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

    @OneToMany(() => DeckCard, (deckCard) => deckCard.deck)
    cards: DeckCard[];

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User, user => user.created_decks)
    user: User;

    @OneToOne(() => DeckImage, deckImage => deckImage.deck)
    deck_image: DeckImage;
}