import { Profile } from "./profile.entity";
import { FollowershipStatus } from "../shared/enums/followership_status.enum";
import { Survey } from "./survey.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";
export declare class Followership {
    followership_id: string;
    follower: Profile;
    following: Profile;
    status: FollowershipStatus;
    sharing_profile: Profile;
    survey_campaign: SurveyCampaign;
    by_survey: Survey;
    created_at?: Date;
    updated_at: Date;
}
