import { User } from './user.entity';
import { Poll } from './poll.entity';
export declare class Comment {
    comment_id: string;
    text: string;
    poll: Poll;
    creator: User;
    is_hidden?: boolean;
    created_at?: Date;
}
