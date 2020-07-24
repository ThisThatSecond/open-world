import { Genders } from "../shared/enums/genders.enum";
import { Poll } from "./poll.entity";
import { Profile } from "./profile.entity";
export declare class User {
    user_id: string;
    username?: string;
    email?: string;
    name?: string;
    firstname?: string;
    surname?: string;
    image_url?: string;
    birthday?: Date;
    gender?: Genders;
    education?: string;
    language?: string;
    geo_point?: {
        x: number;
        y: number;
    } | string;
    location?: string;
    fcm_token?: string;
    installed_version?: string;
    is_analytics_user?: boolean;
    is_active?: boolean;
    is_hidden?: boolean;
    last_opened_analytics?: Date;
    last_opened_app?: Date;
    last_checked_activity?: Date;
    created_at?: Date;
    profiles?: Profile[];
    polls?: Poll[];
}
