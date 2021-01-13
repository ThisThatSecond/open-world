import { Survey } from "./survey.entity";
import { Profile } from "./profile.entity";
export declare class SurveyEngagement {
    survey_engagement_id: string;
    survey: Survey;
    profile: Profile;
    has_tracked?: boolean;
    has_reaction?: boolean;
    has_shared?: boolean;
    is_respondent?: boolean;
    is_complete_respondent?: boolean;
    created_at: Date;
}
