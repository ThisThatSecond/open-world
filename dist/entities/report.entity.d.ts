import { Poll } from "./poll.entity";
import { Collection } from "./collection.entity";
import { Profile } from "./profile.entity";
import { Comment } from "./comment.entity";
export declare class Report {
    report_id: string;
    reporter: Profile;
    comment?: Comment;
    poll?: Poll;
    collection?: Collection;
    profile?: Profile;
    created_at?: Date;
}
