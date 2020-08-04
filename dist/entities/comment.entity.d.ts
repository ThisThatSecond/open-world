import { Poll } from './poll.entity';
import { Collection } from './collection.entity';
import { Profile } from './profile.entity';
export declare class Comment {
    comment_id: string;
    text: string;
    poll: Poll;
    collection: Collection;
    creator: Profile;
    is_hidden?: boolean;
    created_at?: Date;
}
