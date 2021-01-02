import { CommentVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { Comment } from "./comment.entity";
import { TrackableLink } from "./trackable_link.entity";
export declare class CommentVoteHistory {
    comment_vote_history_id: string;
    comment: Comment;
    action: CommentVoteActions;
    voter: Profile;
    sharing_profile: Profile;
    trackable_link: TrackableLink;
    created_at?: Date;
}
