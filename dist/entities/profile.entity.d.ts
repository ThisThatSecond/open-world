import { User } from "./user.entity";
import { Team } from "./team.entity";
import { Poll } from "./poll.entity";
import { NOTIFICATION_PREFERENCES } from "../shared/enums/notification_preferences.enum";
import { IGeoPoint } from "../shared/interfaces/geo_point.interface";
export declare class Profile {
    profile_id: string;
    user: User;
    name: string;
    fullname?: string;
    activity_badge?: number;
    is_verified?: boolean;
    is_active?: boolean;
    is_hidden?: boolean;
    profile_completed?: boolean;
    bio?: string;
    geo_point?: IGeoPoint | string;
    location?: string;
    notifications_preferences?: NOTIFICATION_PREFERENCES[];
    neighborhood_visible?: boolean;
    is_analytics_profile?: boolean;
    image_url?: string;
    fcm_token?: string;
    sees_polls_from?: string[];
    team: Team;
    polls?: Poll[];
    created_at?: Date;
}
