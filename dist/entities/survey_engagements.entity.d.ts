import { Survey } from "./survey.entity";
import { Profile } from "./profile.entity";
export declare class SurveyEngagement {
    survey: Survey;
    profile: Profile;
    is_respondent?: boolean;
    created_at: Date;
}
