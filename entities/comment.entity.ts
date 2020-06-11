import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { User } from './user.entity';
import { Poll } from './poll.entity';

@Entity('comments')
export class Comment {
    @PrimaryColumn()
    comment_id: string;

    @Column()
    text: string;

    @ManyToOne(() => Poll, { nullable: false })
    @JoinColumn({
        name: 'poll_id'
    })
    poll: Poll;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({
        name: 'creator_id'
    })
    creator: User;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at;


}