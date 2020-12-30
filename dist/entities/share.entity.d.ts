import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";
export declare class Share {
    share_id: string;
    survey?: Survey;
    profile?: Profile;
    sharing_profile: Profile;
    survey_campaign: SurveyCampaign;
    created_at?: Date;
}
