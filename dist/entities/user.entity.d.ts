import { NOTIFICATION_PREFERENCES } from '../shared/enums/notification_preferences.enum';
import { Genders } from '../shared/enums/genders.enum';
import { Poll } from './poll.entity';
export declare class User {
    user_id: string;
    username?: string;
    email?: string;
    name?: string;
    firstname?: string;
    surname?: string;
    profile_image_url?: string;
    birthday?: Date;
    gender?: Genders;
    bio?: string;
    neighborhood_visible?: boolean;
    education?: string;
    language?: string;
    geo_point?: {
        x: number;
        y: number;
    } | string;
    location?: string;
    notifications_preferences?: NOTIFICATION_PREFERENCES[];
    sees_polls_from?: string[];
    fcm_token?: string;
    installed_version?: string;
    activity_badge?: number;
    profile_completed?: boolean;
    is_analytics_user?: boolean;
    is_active?: boolean;
    is_hidden?: boolean;
    is_verified?: boolean;
    last_opened_analytics?: Date;
    last_opened_app?: Date;
    last_checked_activity?: Date;
    created_at?: Date;
    polls?: Poll[];
}
