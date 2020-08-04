"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var categories_enum_1 = require("../shared/enums/categories.enum");
var CollectionStatView = /** @class */ (function () {
    function CollectionStatView() {
    }
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], CollectionStatView.prototype, "option_id", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], CollectionStatView.prototype, "c_title", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], CollectionStatView.prototype, "c_location", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], CollectionStatView.prototype, "c_language", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Boolean)
    ], CollectionStatView.prototype, "c_is_private", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Boolean)
    ], CollectionStatView.prototype, "c_is_active", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], CollectionStatView.prototype, "c_category", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], CollectionStatView.prototype, "c_caption", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Number)
    ], CollectionStatView.prototype, "c_visible_options_count", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Boolean)
    ], CollectionStatView.prototype, "is_familiarity_required", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Number)
    ], CollectionStatView.prototype, "c_votes_count", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Date)
    ], CollectionStatView.prototype, "c_created_at", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], CollectionStatView.prototype, "poll_id", void 0);
    CollectionStatView = __decorate([
        typeorm_1.ViewEntity({
            expression: "\n  select \n    o.option_id,\n    o.title o_title,\n    o.is_this o_is_this,\n    o.image_url o_image_url,\n    (\n      select count(*) from option_votes where option_votes.option_id = options.option_id and option_votes.action = '0'\n    ) as o_up_votes,\n    (\n      select count(*) from option_votes where option_votes.option_id = options.option_id and option_votes.action = '1'\n    ) as o_down_votes,\n    (\n      select count(*) from pair_votes \n      inner join pairs on pairs.pair_id = pair_votes.pair_id \n      where pairs.poll_id = p.poll_id and\n      (pairs.option1_id = options.option_id and pair_votes.action = '0') or (pairs.option2_id = options.option_id and pair_votes.action = '1') \n    ) as o_wins_count,\n    (\n      select count(*) from pair_votes \n      inner join pairs on pairs.pair_id = pair_votes.pair_id \n      where pairs.poll_id = p.poll_id and\n      (pairs.option1_id = options.option_id and pair_votes.action = '1') or (pairs.option2_id = options.option_id and pair_votes.action = '0') \n    ) as o_losses_count,\n    o.poll_id o_poll_id\n  \n  from options o\n",
        })
    ], CollectionStatView);
    return CollectionStatView;
}());
exports.CollectionStatView = CollectionStatView;
//# sourceMappingURL=option_stat.view.js.map