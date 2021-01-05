import { Survey } from "./survey.entity";
import { User } from "./user.entity";
export declare class SurveyAudienceRequest {
    survey_audience_request_id: any;
    survey: Survey;
    creator: User;
    extra?: any;
    created_at: Date;
}
