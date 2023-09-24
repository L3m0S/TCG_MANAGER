import { AfterLoad, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { DeckCard } from "./DeckCard.entity";
import { User } from "./User.entity";
import { DeckImage } from "./DeckImage.entity";
import { CardListService } from "../main/Card/CardList/CardListService";

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

    @Column({type: 'boolean', nullable: false, default: false})
    deleted: boolean;

    @AfterLoad()
    async getPokeCardInfo() {
        if (this?.cards?.length > 0) {
            const getCardListService = new CardListService();
            let cards = '';
            this.cards?.forEach((card, index) => {
                if (this?.cards.length === 1) {
                    cards = cards + `id:${card.card_id}`
                } else {
                    if (index === this?.cards?.length - 1) {
                        cards = cards + `id:${card.card_id}`
                    } else {
                        cards = cards + `id:${card.card_id} OR `
                    };
                };
            });

            cards = cards + '&select=name,id,images'
            const cartas = (await getCardListService.getCardList(1, 1000, cards)).data

            this.cards.forEach((card) => {
                card.cardInfo = cartas?.find((pokeCard) => card?.card_id === pokeCard?.id)!
            });
        };
    };
};