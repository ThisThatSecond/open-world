import { Entity, Column, PrimaryColumn, Index, OneToMany } from 'typeorm';
import { NOTIFICATION_PREFERENCES } from '../shared/enums/notification_preferences.enum';
import { Genders } from '../shared/enums/genders.enum';
import { Poll } from './poll.entity';

@Entity('users')
export class User {

    @PrimaryColumn()
    user_id: string;

    @Index()
    @Column({
        unique: true,
        nullable: true,
    })
    username?: string;

    @Index()
    @Column({
        nullable: true,
    })
    email?: string;

    @Index()
    @Column({
        nullable: true
    })
    name?: string;

    @Column({
        nullable: true
    })
    firstname?: string;

    @Column({
        nullable: true
    })
    surname?: string;

    @Column({
        nullable: true
    })
    profile_image_url?: string;

    @Column({
        type: "date",
        nullable: true
    })
    birthday?: Date;

    @Column({
        type: "enum",
        enum: Genders,
        nullable: true
    })
    gender?: Genders;

    @Column({
        nullable: true
    })
    bio?: string;

    @Column({
        default: false
    })
    neighborhood_visible?: boolean;

    @Column({
        nullable: true
    })
    education?: string;

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

    @Column('varchar', {
        array: true,
        default: '{}'
    })
    notifications_preferences?: NOTIFICATION_PREFERENCES[];

    @Column('varchar', {
        array: true,
        default: '{}'
    })
    sees_polls_from?: string[];

    @Column({
        nullable: true
    })
    fcm_token?: string;

    @Column({
        nullable: true
    })
    installed_version?: string;

    @Column({
        default: 0
    })
    activity_badge?: number;

    @Column({
        default: false
    })
    profile_completed?: boolean;

    @Column({
        default: false
    })
    is_analytics_user?: boolean;

    @Column({
        default: true
    })
    is_active?: boolean;

    @Column({
        default: false
    })
    is_hidden?: boolean;

    @Column({
        type: 'timestamptz',
        nullable: true,
    })
    last_opened_analytics?: Date;

    @Column({
        type: 'timestamptz',
        nullable: true,
    })
    last_opened_app?: Date;

    @Column({
        type: 'timestamptz',
        nullable: true,
    })
    last_checked_activity?: Date;

    @Column({
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false
    })
    created_at?: Date;

    @OneToMany(() => Poll, poll => poll.creator)
    polls?: Poll[]


}