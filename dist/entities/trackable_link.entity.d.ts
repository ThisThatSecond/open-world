import { Survey } from "./survey.entity";
import { SurveyThumbnail } from "./survey_thumbnail.entity";
import { User } from "./user.entity";
export declare class TrackableLink {
    trackable_link_id: any;
    survey: Survey;
    surveyThumbnail: SurveyThumbnail;
    campaign_name: string;
    user_id: string;
    creator: User;
    created_at: Date;
}
