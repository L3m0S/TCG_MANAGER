import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";
import { Article } from "./Article.entity";
import { Tag } from "./Tag.entity";

@Entity('article_tags')
export class ArticleTag {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @JoinColumn({ name: 'article_id' })
    @ManyToOne(() => Article, article => article.tags)
    article: Article;

    @JoinColumn({ name: 'tag_id' })
    @ManyToOne(() => Tag)
    tag: Tag;
};