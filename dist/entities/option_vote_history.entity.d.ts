import { Option } from "./option.entity";
import { OptionVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";
export declare class OptionVoteHistory {
    option_vote_history_id: string;
    option: Option;
    action: OptionVoteActions;
    voter: Profile;
    sharing_profile: Profile;
    survey_campaign: SurveyCampaign;
    created_at?: Date;
}
