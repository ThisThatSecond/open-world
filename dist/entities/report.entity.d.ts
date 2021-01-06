import { Profile } from "./profile.entity";
import { Comment } from "./comment.entity";
import { Survey } from "./survey.entity";
export declare class Report {
    report_id: string;
    reporter: Profile;
    comment?: Comment;
    survey?: Survey;
    profile?: Profile;
    created_at?: Date;
}
