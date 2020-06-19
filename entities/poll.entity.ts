import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { CATEGORIES } from '../shared/enums/categories.enum';
import { Profile } from './profile.entity';
import { Option } from './option.entity';

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
        nullable: false
    })
    category: CATEGORIES;

    @Column({
        default: 0,
    })
    visibile_options_count?: number;

    @Column({
        default: 0,
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
        nullable: true
    })
    is_private?: boolean;

    @Column({
        nullable: true
    })
    is_familiarity_required?: boolean;

    @Column({
        default: false
    })
    is_draft?: boolean;

    @Column({
        default: false
    })
    is_hidden?: boolean;

    @ManyToOne(() => User, { nullable: false, eager: true })
    @JoinColumn({
        name: 'creator_id'
    })
    creator: User;

    @ManyToOne(() => Profile, { nullable: true, eager: true })
    @JoinColumn({
        name: 'profile_id'
    })
    profile?: Profile;

    @OneToMany(() => Option, option => option.poll, { nullable: false })
    options: Option[]

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP'
    })
    created_at?: Date;
}