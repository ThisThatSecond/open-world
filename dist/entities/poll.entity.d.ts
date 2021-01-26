import { Option } from "./option.entity";
import { Pair } from "./pair.entity";
import { Survey } from "./survey.entity";
import { PollTypes } from "../shared/enums/poll_types.enum";
import { MultiSelectionTypes, SelectionTypes } from "../shared/enums/selection_types.enum";
export declare class Poll {
    poll_id: string;
    question: string;
    type: PollTypes;
    visible_options_count?: number;
    is_familiarity_required?: boolean;
    selection_type: SelectionTypes;
    multi_selection_type: MultiSelectionTypes;
    multi_selection_count?: number;
    position: number;
    votes_count: number;
    responses_count: number;
    comments_count: number;
    survey?: Survey;
    options?: Option[];
    pairs?: Pair[];
}
