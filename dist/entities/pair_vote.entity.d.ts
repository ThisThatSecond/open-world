import { Pair } from "./pair.entity";
import { PairVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { trackableLink } from "./trackable_link.entity";
export declare class PairVote {
    pair_vote_id: string;
    action: PairVoteActions;
    pair: Pair;
    voter: Profile;
    sharing_profile: Profile;
    trackable_link: trackableLink;
    created_at?: Date;
}
