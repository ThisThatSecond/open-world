import { Entity, Column, PrimaryColumn, Index, JoinColumn, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Team } from './team.entity';
import { Poll } from './poll.entity';

@Entity('profiles')
export class Profile {
    @PrimaryColumn()
    profile_id: string;

    @OneToOne(() => User, { nullable: false })
    @JoinColumn({
        name: 'user_id'
    })
    user: User;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({
        name: 'creator_id'
    })
    creator: User;

    @ManyToOne(() => Team, team => team.profiles, { nullable: false })
    @JoinColumn({
        name: 'team_id'
    })
    team: Team;

    @OneToMany(() => Poll, poll => poll.profile)
    polls?: Poll[]

}