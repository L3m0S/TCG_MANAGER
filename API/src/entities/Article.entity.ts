import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";

@Entity('articles')
export class Article {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'text', nullable: false })
    content: string;

    @Column({ type: 'boolean', nullable: false, default: false })
    published: boolean;

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User, user => user.created_articles)
    user: User;
}