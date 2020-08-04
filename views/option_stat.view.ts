import { ViewEntity, ViewColumn } from "typeorm";
import { CATEGORIES } from "../shared/enums/categories.enum";

@ViewEntity({
  expression: `
  select 
    o.option_id,
    o.title o_title,
    o.is_this o_is_this,
    o.image_url o_image_url,
    (
      select count(*) from option_votes where option_votes.option_id = options.option_id and option_votes.action = '0'
    ) as o_up_votes,
    (
      select count(*) from option_votes where option_votes.option_id = options.option_id and option_votes.action = '1'
    ) as o_down_votes,
    (
      select count(*) from pair_votes 
      inner join pairs on pairs.pair_id = pair_votes.pair_id 
      where pairs.poll_id = p.poll_id and
      (pairs.option1_id = options.option_id and pair_votes.action = '0') or (pairs.option2_id = options.option_id and pair_votes.action = '1') 
    ) as o_wins_count,
    (
      select count(*) from pair_votes 
      inner join pairs on pairs.pair_id = pair_votes.pair_id 
      where pairs.poll_id = p.poll_id and
      (pairs.option1_id = options.option_id and pair_votes.action = '1') or (pairs.option2_id = options.option_id and pair_votes.action = '0') 
    ) as o_losses_count,
    o.poll_id o_poll_id
  
  from options o
`,
})
export class CollectionStatView {
  @ViewColumn()
  option_id: string;

  @ViewColumn()
  c_title: string;

  @ViewColumn()
  c_location: string;

  @ViewColumn()
  c_language: string;

  @ViewColumn()
  c_is_private: boolean;

  @ViewColumn()
  c_is_active: boolean;

  @ViewColumn()
  c_category: CATEGORIES;

  @ViewColumn()
  c_caption: string;

  @ViewColumn()
  c_visible_options_count: number;

  @ViewColumn()
  is_familiarity_required: boolean;

  @ViewColumn()
  c_votes_count: number;

  @ViewColumn()
  c_created_at: Date;
  
  @ViewColumn()
  poll_id: string;
}
