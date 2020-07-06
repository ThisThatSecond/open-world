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
        default: true,
        nullable: false
    })
    is_draft?: boolean;
    
    @Column({
        default: true,
        nullable: false
    })
    is_active?: boolean;
    
    @Column({
        default: false,
        nullable: false
    })
    is_private?: boolean;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    created_at?: Date;


}