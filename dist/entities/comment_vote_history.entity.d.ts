import { CommentVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { Comment } from "./comment.entity";
export declare class CommentVoteHistory {
    comment_vote_history_id: string;
    comment: Comment;
    action: CommentVoteActions;
    voter: Profile;
    created_at?: Date;
}
