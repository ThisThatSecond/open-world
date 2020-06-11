import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { User } from './user.entity';
import { Poll } from './poll.entity';
import { PollUserActions } from '../shared/enums/actions.enum';

@Entity('poll_user_actions')
export class PollUserAction {
    @PrimaryColumn()
    poll_user_action_id: string;

    @ManyToOne(() => Poll, { nullable: false })
    @JoinColumn({
        name: 'poll_id'
    })

    poll: Poll;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({
        name: 'user_id'
    })
    user: User;

    @Column({
        type: 'enum',
        enum: PollUserActions,
    })
    action: PollUserAction;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at;



}