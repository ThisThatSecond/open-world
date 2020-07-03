import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Team } from './team.entity';
import { Profile } from './profile.entity';
import { AnalyticsRoles } from '../shared/enums/analytics_roles.enum';

@Entity('memberships')
export class Membership {
    @PrimaryColumn()
    membership_id: string;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({
        name: 'inviter_id'
    })
    inviter: User;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({
        name: 'invitee_id'
    })
    invitee: User;

    @ManyToOne(() => Team)
    @JoinColumn({
        name: 'team_id',
    })
    team?: Team;

    @ManyToOne(() => Profile)
    @JoinColumn({
        name: 'profile_id',
    })
    project?: Profile;

    @Column({
        nullable: true,
    })
    invitation_message?: string;

    @Column({
        default: true,
        nullable: false
    })
    is_pending?: boolean;

    @Column({
        type: "enum",
        enum: AnalyticsRoles,
        nullable: false
    })
    role: AnalyticsRoles;

    @Column({
        default: false,
        nullable: false
    })
    is_active?: boolean;

    @Column({
        default: false,
        nullable: false
    })
    send_email_required?: boolean;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    created_at?: Date;


}