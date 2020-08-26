import { Genders } from "../shared/enums/genders.enum";
import { Poll } from "./poll.entity";
import { Profile } from "./profile.entity";
import { IGeoPoint } from "../shared/interfaces/geo_point.interface";
import { Invitation } from "./invitation.entity";
import { Team } from "./team.entity";
export declare class User {
    user_id: string;
    username: string;
    email?: string;
    name?: string;
    firstname?: string;
    surname?: string;
    image_url?: string;
    birthday?: Date;
    gender?: Genders;
    education?: string;
    language?: string;
    facebook_id?: string;
    geo_point?: IGeoPoint | string;
    location?: string;
    fcm_token?: string;
    installed_version?: string;
    is_analytics_user?: boolean;
    is_active?: boolean;
    is_hidden?: boolean;
    email_verified?: boolean;
    bio?: string;
    last_opened_analytics?: Date;
    desc?: {
        gender: string;
    };
    created_at?: Date;
    teams?: Team[];
    profiles?: Profile[];
    polls?: Poll[];
    invitations?: Invitation[];
}
