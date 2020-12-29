import { CommentVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { Comment } from "./comment.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";
export declare class CommentVoteHistory {
    comment_vote_history_id: string;
    comment: Comment;
    action: CommentVoteActions;
    voter: Profile;
    sharing_profile: Profile;
    survey_campaign: SurveyCampaign;
    created_at?: Date;
}
