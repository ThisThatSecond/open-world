import { User } from "./user.entity";
import { Team } from "./team.entity";
import { Profile } from "./profile.entity";
import { InvitationTypes } from "../shared/enums/invitation_types.enum";
import { InvitationStatus } from "../shared/enums/invitation_status.enum";
export declare class Invitation {
    invitation_id: string;
    inviter: User;
    invitee: User;
    team?: Team;
    profile?: Profile;
    invitation_message?: string;
    status: InvitationStatus;
    type: InvitationTypes;
    is_active?: boolean;
    created_at?: Date;
    updated_at: Date;
}
