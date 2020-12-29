import { Pair } from "./pair.entity";
import { PairVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";
export declare class PairVote {
    pair_vote_id: string;
    action: PairVoteActions;
    pair: Pair;
    voter: Profile;
    sharing_profile: Profile;
    survey_campaign: SurveyCampaign;
    created_at?: Date;
}
