import { User } from './user.entity';
import { Pair } from './pair.entity';
import { PairVoteActions } from '../shared/enums/actions.enum';
export declare class PairVoteHistory {
    pair_vote_history_id: string;
    pair: Pair;
    action: PairVoteActions;
    voter: User;
    created_at: any;
}
