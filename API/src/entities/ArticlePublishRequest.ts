import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";
import { Article } from "./Article.entity";


@Entity('article_publish_requests')
export class ArticlePublishRequest {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'text', default: 'PENDING', nullable: false })
    status: 'PENDING' | 'PUBLISHED' | 'REFUSED';

    @Column({ type: 'text', nullable: true })
    message: string;

    @JoinColumn({ name: 'action_user_id' })
    @ManyToOne(() => User)
    action_user: User;

    @JoinColumn({ name: 'article_id' })
    @ManyToOne(() => Article, article => article.publishRequests)
    article: Article;
};