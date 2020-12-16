import { Poll } from "./poll.entity";
import { Survey } from "./survey.entity";
export declare class Collection {
    collection_id: string;
    title: string;
    survey?: Survey;
    polls?: Poll[];
}
