import { User } from "./user.entity";
import { Team } from "./team.entity";
import { NOTIFICATION_PREFERENCES } from "../shared/enums/notification_preferences.enum";
import { IGeoPoint } from "../shared/interfaces/geo_point.interface";
import { Survey } from "./survey.entity";
import { SurveyEngagement } from "./survey_engagements.entity";
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
    is_anonymous_profile?: boolean;
    image_url?: string;
    fcm_token?: string;
    sees_polls_from?: string[];
    last_opened_app?: Date;
    last_checked_activity?: Date;
    join_link?: string;
    is_private?: boolean;
    team: Team;
    surveys?: Survey[];
    engaged_surveys?: SurveyEngagement[];
    created_at?: Date;
    company_id?: string;
    is_company_profile?: boolean;
    require_invitation?: boolean;
    company_team_id?: string;
}
