import { Pair } from "./pair.entity";
import { PairVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
export declare class PairVoteHistory {
    pair_vote_history_id: string;
    pair: Pair;
    action: PairVoteActions;
    voter: Profile;
    created_at?: Date;
}
