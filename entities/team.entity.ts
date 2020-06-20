import { Entity, Column, PrimaryColumn, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Profile } from './profile.entity';

@Entity('teams')
export class Team {
    @PrimaryColumn()
    team_id: string;

    @Index()
    @Column()
    name: string;

    @Column()
    join_link: string;

    @Column()
    description: string;

    @Column({
        nullable: true
    })
    avatar_url?: string;

    @Column({
        default: 0
    })
    opinions_count?: number;

    @Column({
        default: true
    })
    is_active: boolean;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at?: Date;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({
        name: 'creator_id',
    })
    creator: User;

    @OneToMany(() => Profile, profile => profile.team)
    profiles?: Profile[]
}