import { Profile } from "./profile.entity";
import { Reactions } from "../shared/enums/reactions.enum";
import { Survey } from "./survey.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";
export declare class Reaction {
    reaction_id: string;
    profile: Profile;
    survey?: Survey;
    reaction: Reactions;
    sharing_profile: Profile;
    survey_campaign: SurveyCampaign;
    created_at?: Date;
}
