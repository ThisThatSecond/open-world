import { Poll } from "./poll.entity";
import { OptionVote } from "./option_vote.entity";
export declare class Option {
    option_id: string;
    title: string;
    image_url?: string;
    is_this?: boolean;
    optionVotes?: OptionVote[];
    poll: Poll;
    wins?: number;
}
