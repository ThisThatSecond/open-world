import { Pair } from "./pair.entity";
import { PairVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";
export declare class PairVoteHistory {
    pair_vote_history_id: string;
    pair: Pair;
    action: PairVoteActions;
    voter: Profile;
    sharing_profile: Profile;
    survey_campaign: SurveyCampaign;
    created_at?: Date;
}
