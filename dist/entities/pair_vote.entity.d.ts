import { Pair } from './pair.entity';
import { PairVoteActions } from '../shared/enums/actions.enum';
import { Profile } from './profile.entity';
export declare class PairVote {
    pair_vote_id: string;
    action: PairVoteActions;
    pair: Pair;
    voter: Profile;
    created_at?: Date;
}
