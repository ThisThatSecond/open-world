import { User } from './user.entity';
import { Option } from './option.entity';
import { OptionVoteActions } from '../shared/enums/actions.enum';
export declare class OptionVoteHistory {
    option_vote_history_id: string;
    option: Option;
    action: OptionVoteActions;
    voter: User;
    created_at: any;
}
