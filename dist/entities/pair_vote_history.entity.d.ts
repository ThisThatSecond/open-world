import { Pair } from "./pair.entity";
import { PairVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { TrackableLink } from "./trackable_link.entity";
export declare class PairVoteHistory {
    pair_vote_history_id: string;
    pair: Pair;
    action: PairVoteActions;
    voter: Profile;
    sharing_profile: Profile;
    trackable_link: TrackableLink;
    created_at?: Date;
}
