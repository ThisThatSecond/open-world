import { Poll } from "./poll.entity";
import { Option } from "./option.entity";
import { PairVote } from "./pair_vote.entity";
export declare class Pair {
    pair_id: string;
    poll: Poll;
    option1: Option;
    option2: Option;
    pairVotes?: PairVote[];
    created_at?: Date;
}
