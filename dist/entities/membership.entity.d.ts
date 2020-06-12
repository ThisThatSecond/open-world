import { User } from './user.entity';
import { Team } from './team.entity';
import { Project } from './project.entity';
export declare class Membership {
    membership_id: string;
    inviter: User;
    invitee: User;
    team: Team;
    project: Project;
    invitation_message: string;
    is_pending: boolean;
    is_admin: boolean;
    is_active: boolean;
    send_email_required: boolean;
    created_at: any;
}
