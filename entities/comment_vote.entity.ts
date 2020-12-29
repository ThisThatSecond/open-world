import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn, Unique } from "typeorm";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { CommentVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { SurveyCampaign } from "./survey_campaigns.entity";

@Entity("comment_votes")
@Unique("unique_comment_voter", ["comment", "voter"])

export class CommentVote {
  @PrimaryGeneratedColumn("uuid")
  comment_vote_id: string;

  @Column({
    type: "enum",
    enum: CommentVoteActions,
    enumName: "comment_vote_action_enum",
    nullable: false,
  })
  action: CommentVoteActions;

  @ManyToOne(() => Comment, { nullable: false })
  @JoinColumn({
    name: "comment_id",
  })
  comment: Comment;

  @ManyToOne(() => Profile, { nullable: false })
  @JoinColumn({
    name: "voter_id",
  })
  voter: Profile;

  @ManyToOne(() => Profile, { nullable: true })
  @JoinColumn({
    name: "sharing_profile_id",
  })
  sharing_profile: Profile;

  @ManyToOne(() => SurveyCampaign, { nullable: true })
  @JoinColumn({
    name: "survey_campaign_id",
  })
  survey_campaign: SurveyCampaign;


  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
