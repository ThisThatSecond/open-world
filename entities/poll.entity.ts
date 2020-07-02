import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { CATEGORIES } from '../shared/enums/categories.enum';
import { Profile } from './profile.entity';
import { Option } from './option.entity';
import { Collection } from './collection.entity';

@Entity('polls')
export class Poll {
    @PrimaryColumn()
    poll_id: string;

    @Column()
    question: string;

    @Column({
        nullable: true
    })
    caption?: string;

    @Column({
        nullable: true
    })
    language?: string;

    @Column({
        type: 'point',
        nullable: true
    })
    geo_point?: {
        x: number,
        y: number
    } | string;

    @Column({
        nullable: true
    })
    location?: string;

    @Column({
        type: 'enum',
        enum: CATEGORIES,
        nullable: true
    })
    category?: CATEGORIES;

    @Column({
        nullable: true,
    })
    visibile_options_count?: number;

    @Column({
        nullable: true,
    })
    desired_votes_count?: number;

    @Column({
        type: 'timestamptz',
        nullable: true
    })
    release_date?: Date;

    @Column({
        default: false
    })
    is_analytics_poll?: boolean;

    @Column({
        default: false
    })
    has_anonymous_vote?: boolean;

    @Column({
        default: false
    })
    is_private?: boolean;

    @Column({
        nullable: true
    })
    is_familiarity_required?: boolean;

    @Column({
        default: true
    })
    is_draft?: boolean;

    @Column({
        default: false
    })
    is_hidden?: boolean;
    
    @Column({
        default: true
    })
    is_active?: boolean;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at?: Date;

    @ManyToOne(() => User, user => user.polls, { nullable: false })
    @JoinColumn({
        name: 'creator_id'
    })
    creator: User;

    @ManyToOne(() => Profile, profile => profile.polls, { nullable: true })
    @JoinColumn({
        name: 'profile_id'
    })
    profile?: Profile;

    @ManyToOne(() => Collection, collection => collection.polls, { nullable: true })
    @JoinColumn({
        name: 'collection_id'
    })
    collection?: Collection;

    @OneToMany(() => Option, option => option.poll)
    options?: Option[]
}