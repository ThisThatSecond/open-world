import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, PrimaryColumn } from 'typeorm';
import { Poll } from './poll.entity';

@Entity('options')
export class Option {
    @PrimaryColumn()
    option_id: string;

    @Column()
    title: string;

    @Column({
        nullable: true
    })
    image_url?: string;
    
    @Column({
        nullable: true
    })
    is_this?: boolean;

    @ManyToOne(() => Poll, { nullable: false })
    @JoinColumn({
        name: 'poll_id'
    })
    poll: Poll;

}