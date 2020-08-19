import { User } from "./user.entity";
export declare class InvitationLink {
    invitation_link_id: string;
    user: User;
    email?: string;
    invitation_message?: string;
    is_active?: boolean;
    created_at?: Date;
}
