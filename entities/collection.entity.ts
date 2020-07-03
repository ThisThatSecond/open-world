import { Entity, Column, Index, JoinColumn, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Profile } from './profile.entity';
import { User } from './user.entity';
import { Poll } from './poll.entity';

@Entity('collections')
export class Collection {

    @PrimaryGeneratedColumn('uuid')
    collection_id: string;

    @Index()
    @Column({
        unique: true,
        nullable: true,
    })
    title: string;

    @ManyToOne(() => Profile, profile => profile.polls, { nullable: false })
    @JoinColumn({
        name: 'profile_id'
    })
    profile: Profile;

    @ManyToOne(() => User, user => user.polls, { nullable: false })
    @JoinColumn({
        name: 'creator_id'
    })
    creator: User;

    @OneToMany(() => Poll, poll => poll.collection)
    polls?: Poll[]

    @Column({
        default: true
    })
    is_draft?: boolean;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at?: Date;


}