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
    ], CollectionStatView.prototype, "collection_id", void 0);
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
    ], CollectionStatView.prototype, "c_creator_id", void 0);
    CollectionStatView = __decorate([
        typeorm_1.ViewEntity({
            expression: "\n    select\n      c.collection_id,\n      c.title c_title,\n      c.location c_location,\n      c.language c_language,\n      c.is_private c_is_private,\n      c.is_active c_active,\n      c.category c_category,\n      c.caption c_caption,\n      c.visibile_options_count c_visible_options_count,\n      c.is_familiarity_required c_familiarity_required, \n      (\n          select count(*) from pair_votes \n          inner join pairs on pairs.pair_id = pair_votes.pair_id\n          inner join polls on pairs.poll_id = polls.poll_id\n          inner join collections on collections.collection_id = polls.collection_id \n          where collections.collection_id = c.collection_id and pair_votes.action not in ('2', '3')\n          ) as c_votes_count,\n      c.creator_id c_creator_id,\n      c.created_at c_created_at,\n      users.user_id c_user_id,\n      users.profile_image_url c_profile_image_url,\n      users.username c_user_username,\n      users.is_verified c_user_is_verified\n\n      \n    from collections c\n\n",
        })
    ], CollectionStatView);
    return CollectionStatView;
}());
exports.CollectionStatView = CollectionStatView;
//# sourceMappingURL=collection_stat.view.js.map