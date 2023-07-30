import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Article } from "./Article.entity";

@Entity('article_images')
export class ArticleImage {
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
    identifier: string;
 
    @JoinColumn({ name: 'article_id' })
    @ManyToOne(() => Article, (article) => article.images)
    article: Article;
};