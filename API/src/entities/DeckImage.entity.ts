import { AfterLoad, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Deck } from "./Deck.entity";
import { GetCardByIdService } from "../main/Card/GetCardById/GetCardByIdService";

@Entity('deck_images')
export class DeckImage {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ nullable: true })
    url: string;

    @Column({ nullable: true })
    card_id: string;

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    original_name: string;

    @JoinColumn({ name: 'deck_id' })
    @OneToOne(() => Deck, (deck) => deck.deck_image)
    deck: Deck;

    @Column({ nullable: true })
    card_image: string;

    @AfterLoad()
    async getCardImage() {
        if (this.card_id) {
            const getCardByIdService = new GetCardByIdService();
            const card = (await getCardByIdService.getCardById(this.card_id)).data;
            this.card_image = card?.images?.small;
        };
    };
};