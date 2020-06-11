import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Option } from './option.entity';
import { OptionVoteActions } from '../shared/enums/actions.enum';

@Entity('option_votes')
export class OptionVote {
    @PrimaryGeneratedColumn('uuid')
    option_vote_id: string;

    @ManyToOne(() => Option, { nullable: false })
    @JoinColumn({
        name: 'option_id'
    })
    option: Option;

    @Column({
        type: 'enum',
        enum: OptionVoteActions,
        enumName: 'option_vote_action_enum'
    })
    action: OptionVoteActions;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({
        name: 'voter_id'
    })
    voter: User;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at;


}