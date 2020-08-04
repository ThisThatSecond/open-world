import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Pair } from './pair.entity';
import { PairVoteActions } from '../shared/enums/actions.enum';
import { Profile } from './profile.entity';

@Entity('pair_votes_history')
export class PairVoteHistory {
    @PrimaryGeneratedColumn('uuid')
    pair_vote_history_id: string;

    @ManyToOne(() => Pair, { nullable: false })
    @JoinColumn({
        name: 'pair_id'
    })
    pair: Pair;

    @Column({
        type: 'enum',
        enum: PairVoteActions,
        enumName: 'pair_vote_action_enum'
    })
    action: PairVoteActions;

    @ManyToOne(() => Profile, { nullable: false })
    @JoinColumn({
        name: 'voter_id'
    })
    voter: Profile;


    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    created_at?: Date;


}