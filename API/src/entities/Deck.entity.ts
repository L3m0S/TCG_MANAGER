import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DeckImage } from "./DeckImage.entity";

@Entity('decks')
export class Deck {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({type: 'varchar', length: '200', nullable: true})
    name: string;

    @OneToMany(() => DeckImage, (deckImage) => deckImage.deck)
    images: DeckImage[]
}