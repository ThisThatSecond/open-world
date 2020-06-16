import { Poll } from './poll.entity';
export declare class Option {
    option_id: string;
    title: string;
    image_url?: string;
    is_this?: boolean;
    poll: Poll;
}
