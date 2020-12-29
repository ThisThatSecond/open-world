import { Survey } from "./survey.entity";
import { User } from "./user.entity";
export declare class SurveyCampaign {
    survey_campaign_id: any;
    survey: Survey;
    name: string;
    creator: User;
    created_at: Date;
}
