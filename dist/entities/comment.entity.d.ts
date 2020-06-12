import { User } from './user.entity';
import { Poll } from './poll.entity';
export declare class Comment {
    comment_id: string;
    text: string;
    poll: Poll;
    creator: User;
    created_at: any;
}
