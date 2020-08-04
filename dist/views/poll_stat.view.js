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
var PollStatView = /** @class */ (function () {
    function PollStatView() {
    }
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], PollStatView.prototype, "poll_id", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], PollStatView.prototype, "p_question", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], PollStatView.prototype, "p_caption", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], PollStatView.prototype, "p_category", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], PollStatView.prototype, "c_location", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], PollStatView.prototype, "c_language", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Boolean)
    ], PollStatView.prototype, "p_is_analytics_poll", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Boolean)
    ], PollStatView.prototype, "p_is_private", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Boolean)
    ], PollStatView.prototype, "p_is_active", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Number)
    ], PollStatView.prototype, "p_visible_options_count", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Boolean)
    ], PollStatView.prototype, "p_is_familiarity_required", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Number)
    ], PollStatView.prototype, "p_votes_count", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", Date)
    ], PollStatView.prototype, "p_created_at", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], PollStatView.prototype, "p_collection_id", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], PollStatView.prototype, "profile_id", void 0);
    __decorate([
        typeorm_1.ViewColumn(),
        __metadata("design:type", String)
    ], PollStatView.prototype, "p_creator_id", void 0);
    PollStatView = __decorate([
        typeorm_1.ViewEntity({
            expression: "\n    select\n      p.poll_id,\n      p.question p_question,\n      p.caption p_caption,\n      p.category p_category,\n      p.location p_location,\n      p.language p_language,\n      p.is_analytics_poll p_is_analytics_poll,\n      p.is_private p_is_private,\n      p.is_active p_is_active,\n      p.visibile_options_count p_visibile_options_count,\n      p.is_familiarity_required p_is_familiarity_required,\n      (\n        select count(*) from pair_votes \n        inner join pairs on pairs.pair_id = pair_votes.pair_id \n        where pairs.poll_id = p.poll_id and pair_votes.action not in ('2', '3')\n      ) as p_votes_count,\n      p.created_at p_created_at,\n      p.collection_id p_collection_id,\n      p.profile_id p_profile_id,\n      p.creator_id p_creator_id\n\n    from polls\n\n",
        })
    ], PollStatView);
    return PollStatView;
}());
exports.PollStatView = PollStatView;
//# sourceMappingURL=poll_stat.view.js.map