import { CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";
import { Article } from "./Article.entity";

@Entity('article_views')
export class ArticleView {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User)
    user: User;

    @JoinColumn({ name: 'article_id' })
    @ManyToOne(() => Article)
    article: Article;
};