import { Comment } from "./comment.entity";
import { CommentVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { trackableLink } from "./trackable_link.entity";
export declare class CommentVote {
    comment_vote_id: string;
    action: CommentVoteActions;
    comment: Comment;
    voter: Profile;
    sharing_profile: Profile;
    trackable_link: trackableLink;
    created_at?: Date;
}
