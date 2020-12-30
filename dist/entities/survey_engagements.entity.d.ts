import { Survey } from "./survey.entity";
import { Profile } from "./profile.entity";
export declare class SurveyEngagement {
    survey: Survey;
    profile: Profile;
    has_tracked?: boolean;
    has_reaction?: boolean;
    has_shared?: boolean;
    has_voted?: boolean;
    is_respondent?: boolean;
    created_at: Date;
}
