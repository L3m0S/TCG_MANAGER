import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User.entity";

@Entity('user_profile_images')
export class UserProfileImage {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @JoinColumn({ name: 'user_id' })
    @OneToOne(() => User, user => user.profile_image)
    user: User;

    @Column()
    url: string;

    @Column()
    name: string;

    @Column()
    original_name: string;
}