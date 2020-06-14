import { Entity, Column, PrimaryColumn, Index, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { User } from './user.entity';
import { Team } from './team.entity';

@Entity('profiles')
export class Profile {
    @PrimaryColumn()
    project_id: string;

    @Index()
    @Column()
    name: string;

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

    @ManyToOne(() => Team, { nullable: false })
    @JoinColumn({
        name: 'team_id'
    })
    team: Team;

}