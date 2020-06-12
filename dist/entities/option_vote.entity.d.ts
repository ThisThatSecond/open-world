import { User } from './user.entity';
import { Option } from './option.entity';
import { OptionVoteActions } from '../shared/enums/actions.enum';
export declare class OptionVote {
    option_vote_id: string;
    option: Option;
    action: OptionVoteActions;
    voter: User;
    created_at: any;
}
