import { Option } from "./option.entity";
import { Collection } from "./collection.entity";
import { Pair } from "./pair.entity";
import { Survey } from "./survey.entity";
export declare class Poll {
    poll_id: string;
    question: string;
    visible_options_count?: number;
    is_familiarity_required?: boolean;
    position: number;
    votes_count: number;
    responses_count: number;
    comments_count: number;
    collection?: Collection;
    survey?: Survey;
    options?: Option[];
    pairs?: Pair[];
}
