import { User } from './user.entity';
import { Team } from './team.entity';
import { Profile } from './profile.entity';
import { AnalyticsRoles } from '../shared/enums/analytics_roles.enum';
export declare class Membership {
    membership_id: string;
    inviter: User;
    invitee: User;
    team: Team;
    project: Profile;
    invitation_message: string;
    is_pending: boolean;
    role: AnalyticsRoles;
    is_active: boolean;
    send_email_required: boolean;
    created_at: any;
}
