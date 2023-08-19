import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";

@Entity('tags')
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column({ type: 'text', nullable: false })
    name: string;

    @JoinColumn({ name: 'user_id' })
    @ManyToOne(() => User)
    user: User;
};