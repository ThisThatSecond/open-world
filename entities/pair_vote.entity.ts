import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Pair } from './pair.entity';
import { PairVoteActions } from '../shared/enums/actions.enum';

@Entity('pair_votes')
export class PairVote {
    @PrimaryGeneratedColumn('uuid')
    pair_vote_id: string;

    @Column({
        type: 'enum',
        enum: PairVoteActions,
        enumName: 'pair_vote_action_enum'
    })
    action: PairVoteActions;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at?: Date;

    @ManyToOne(() => Pair, { nullable: false })
    @JoinColumn({
        name: 'pair_id'
    })
    pair: Pair;

    @ManyToOne(() => User, { nullable: false })
    @JoinColumn({
        name: 'voter_id'
    })
    voter: User;
}