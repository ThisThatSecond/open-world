import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { User } from './user.entity';
import { Pair } from './pair.entity';
import { PairVoteActions } from '../shared/enums/actions.enum';

@Entity('pair_votes')
@Unique("uniqe_pair_voter", ["pair_id", "voter_id"])
export class PairVote {
    @PrimaryGeneratedColumn('uuid')
    pair_vote_id: string;

    @Column({
        type: 'enum',
        enum: PairVoteActions,
        enumName: 'pair_vote_action_enum',
        nullable: false
    })
    action: PairVoteActions;

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

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    created_at?: Date;
}