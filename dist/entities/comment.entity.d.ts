import { Poll } from "./poll.entity";
import { Collection } from "./collection.entity";
import { Profile } from "./profile.entity";
export declare class Comment {
    comment_id: string;
    text: string;
    poll: Poll;
    collection?: Collection;
    creator: Profile;
    is_hidden?: boolean;
    upvotes_count: number;
    downvotes_count: number;
    created_at?: Date;
}
