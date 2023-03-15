import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Deck } from "./Deck.entity";
import { User } from "./User.entity";

@Entity('deck_image')
export class DeckImage {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Deck, (deck) => deck.images)
    @JoinColumn({name: 'deck_id'})
    deck: Deck;

    @JoinColumn({name: 'owner_id'})
    @ManyToOne(() => User, (user) => user.id)
    owner: User;
}