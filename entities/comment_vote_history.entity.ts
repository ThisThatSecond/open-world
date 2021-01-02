import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from "typeorm";
import { CommentVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";
import { Comment } from "./comment.entity";
import { trackableLink } from "./trackable_link.entity";

@Entity("comment_votes_history")
export class CommentVoteHistory {
  @PrimaryGeneratedColumn("uuid")
  comment_vote_history_id: string;

  @ManyToOne(() => Comment, { nullable: false })
  @JoinColumn({
    name: "comment_id",
  })
  comment: Comment;

  @Column({
    type: "enum",
    enum: CommentVoteActions,
    enumName: "comment_vote_action_enum",
    nullable: false,
  })
  action: CommentVoteActions;

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

  @ManyToOne(() => trackableLink, { nullable: true })
  @JoinColumn({
    name: "trackable_link_id",
  })
  trackable_link: trackableLink;

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
