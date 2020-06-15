import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Poll } from './poll.entity';
import { Option } from './option.entity';

@Entity('pairs')
@Unique(['option1', 'option2'])
export class Pair {
    @PrimaryGeneratedColumn('uuid')
    pair_id: string;

    @ManyToOne(() => Poll, { nullable: false })
    @JoinColumn({
        name: 'poll_id'
    })
    poll: Poll;

    @ManyToOne(() => Option, { nullable: false })
    @JoinColumn({
        name: 'option1_id'
    })
    option1: Option;

    @ManyToOne(() => Option, { nullable: false })
    @JoinColumn({
        name: 'option2_id'
    })
    option2: Option;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at;


}