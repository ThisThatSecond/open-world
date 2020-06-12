import { User } from './user.entity';
import { Pair } from './pair.entity';
import { PairVoteActions } from '../shared/enums/actions.enum';
export declare class PairVote {
    pair_vote_id: string;
    pair: Pair;
    action: PairVoteActions;
    voter: User;
    created_at: any;
}
