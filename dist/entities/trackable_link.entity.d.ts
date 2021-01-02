import { Survey } from "./survey.entity";
import { surveyThumbnail } from "./survey_thumbnail.entity";
import { User } from "./user.entity";
export declare class trackableLink {
    trackable_link_id: any;
    survey: Survey;
    surveyThumbnail: surveyThumbnail;
    campaign_name: string;
    user_id: string;
    creator: User;
    created_at: Date;
}
