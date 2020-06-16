import { Poll } from './poll.entity';
import { Option } from './option.entity';
export declare class Pair {
    pair_id: string;
    poll: Poll;
    option1: Option;
    option2: Option;
    created_at?: Date;
}
