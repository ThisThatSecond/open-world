import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";
import { Comment } from "./comment.entity";
import { CommentVoteActions } from "../shared/enums/actions.enum";
import { Profile } from "./profile.entity";

@Entity("comment_votes")
export class CommentVote {
  @PrimaryGeneratedColumn("uuid")
  comment_vote_id: string;

  @Column({
    type: "enum",
    enum: CommentVoteActions,
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

  @Column({
    type: "timestamptz",
    default: () => "CURRENT_TIMESTAMP",
    nullable: false,
  })
  created_at?: Date;
}
