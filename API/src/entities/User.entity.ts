import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Deck } from "./Deck.entity";
import { Article } from "./Article.entity";
import { UserProfileImage } from "./UserProfileImage.entity";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ nullable: false, unique: true })
    user_name: string;

    @Column({ type: 'varchar', length: '200', nullable: false })
    name: string;

    @Column({ type: 'varchar', length: '100', nullable: false, unique: true })
    email: string;

    @Column({ type: 'varchar', nullable: false, select: false })
    password: string;

    @Column({ nullable: false, default: false })
    admin: boolean;

    @Column({ nullable: false, default: false })
    deleted: boolean;

    @OneToMany(() => Deck, deck => deck.user)
    created_decks: Deck[];

    @OneToMany(() => Article, article => article.user)
    created_articles: Article[];

    @OneToOne(() => UserProfileImage, userProfileImage => userProfileImage.user)
    profile_image: UserProfileImage;
};