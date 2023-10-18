import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";
import { Article } from "./Article.entity";

@Entity('article_comments')
export class ArticleComment {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'varchar', nullable: false, length: 1000 })
    content: string;

    @Column({ type: 'boolean', nullable: false, default: false })
    deleted: boolean;

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User, user => user.created_articles)
    user: User;

    @JoinColumn({ name: 'article_id' })
    @ManyToOne(() => Article, article => article.comments)
    article: Article;

    @JoinColumn({ name: 'relation_comment_id' })
    @ManyToOne(() => ArticleComment, comments => comments.relation_comment)
    relation_comment: ArticleComment;
};