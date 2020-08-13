import { Entity, Column, PrimaryColumn, Index, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Profile } from './profile.entity';

@Entity('teams')
export class Team {
    @PrimaryColumn()
    team_id: string;

    @Index()
    @Column({
        nullable: false
    })
    name: string;

    @Column({
        nullable: true
    })
    join_link?: string;

    @Column({
       nullable: false 
    })
    description: string;

    @Column({
        nullable: true
    })
    avatar_url?: string;

    @Column({
        default: 0,
        nullable: false
    })
    opinions_count?: number;

    @Column({
        default: true,
        nullable: false
    })
    is_active: boolean;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({
        name: 'owner_id',
    })
    owner: User;

    @OneToMany(() => Profile, profile => profile.team)
    profiles?: Profile[]

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    created_at?: Date;
}