import { User } from './user.entity';
import { Comment } from './comment.entity';
import { CommentVoteActions } from '../shared/enums/actions.enum';
export declare class CommentVote {
    comment_vote_id: string;
    action: CommentVoteActions;
    comment: Comment;
    voter: User;
    created_at: any;
}
