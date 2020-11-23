import { Comment } from "./comment.entity";
import { CommentVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
export declare class CommentVote {
    comment_vote_id: string;
    action: CommentVoteActions;
    comment: Comment;
    voter: Profile;
    sharing_profile: Profile;
    created_at?: Date;
}
