import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";
export declare class Tracking {
    tracking_id: string;
    tracker: Profile;
    survey?: Survey;
    sharing_profile: Profile;
    survey_campaign: SurveyCampaign;
    created_at?: Date;
}
