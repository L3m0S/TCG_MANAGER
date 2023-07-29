import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";
import { ArticleImage } from "./ArticleImage.entity";

@Entity('article_publish_requests')
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'text', nullable: false })
    content: string;

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User, user => user.created_articles)
    user: User;

    @OneToMany(() => ArticleImage, image => image.article)
    images: ArticleImage[];
}