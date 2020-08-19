import { User } from "./user.entity";
import { Team } from "./team.entity";
import { Profile } from "./profile.entity";
export declare class InvitationLink {
    invitation_link_id: string;
    user: User;
    email?: string;
    team?: Team;
    profile?: Profile;
    invitation_message?: string;
    is_active?: boolean;
    created_at?: Date;
}
