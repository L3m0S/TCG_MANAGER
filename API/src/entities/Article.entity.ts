import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";
import { ArticleImage } from "./ArticleImage.entity";
import { ArticlePublishRequest } from "./ArticlePublishRequest";
import { ArticleTag } from "./ArticleTag.entity";

@Entity('articles')
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'varchar', nullable: false })
    content: string;

    @Column({ type: 'text', nullable: false })
    title: string;

    @Column({ type: 'varchar', nullable: false, length: 1000 })
    description: string;

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User, user => user.created_articles)
    user: User;

    @OneToMany(() => ArticleImage, image => image.article)
    images: ArticleImage[];

    @OneToMany(() => ArticlePublishRequest, publishRequest => publishRequest.article)
    publishRequests: ArticlePublishRequest[];

    @OneToMany(() => ArticleTag, articleTag => articleTag.article)
    tags: ArticleTag[];
};