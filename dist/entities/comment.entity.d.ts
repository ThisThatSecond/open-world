import { Profile } from "./profile.entity";
import { Survey } from "./survey.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";
export declare class Comment {
    comment_id: string;
    text: string;
    survey?: Survey;
    creator: Profile;
    sharing_profile: Profile;
    survey_campaign: SurveyCampaign;
    is_hidden?: boolean;
    upvotes_count: number;
    downvotes_count: number;
    created_at?: Date;
}
