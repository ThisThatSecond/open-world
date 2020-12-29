import { Comment } from "./comment.entity";
import { CommentVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";
export declare class CommentVote {
    comment_vote_id: string;
    action: CommentVoteActions;
    comment: Comment;
    voter: Profile;
    sharing_profile: Profile;
    survey_campaign: SurveyCampaign;
    created_at?: Date;
}
