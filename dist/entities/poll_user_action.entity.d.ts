import { User } from './user.entity';
import { Poll } from './poll.entity';
export declare class PollUserAction {
    poll_user_action_id: string;
    poll: Poll;
    user: User;
    action: PollUserAction;
    created_at?: Date;
}
