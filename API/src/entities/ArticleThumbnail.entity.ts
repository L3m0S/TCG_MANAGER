import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Article } from "./Article.entity";

@Entity('article_thumbnails')
export class ArticleThumbnail {
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

    @JoinColumn({ name: 'article_id' })
    @ManyToOne(() => Article, (article) => article.images)
    article: Article;
};