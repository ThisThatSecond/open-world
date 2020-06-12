import { User } from './user.entity';
import { CATEGORIES } from '../shared/enums/categories.enum';
export declare class Poll {
    poll_id: string;
    question: string;
    caption: string;
    category: CATEGORIES;
    visibile_options_count: number;
    analytics_audience_size: number;
    release_date: Date;
    is_analytics_poll: boolean;
    is_private: boolean;
    is_familiarity_required: boolean;
    is_draft: boolean;
    is_active: boolean;
    creator: User;
    created_at: any;
}
