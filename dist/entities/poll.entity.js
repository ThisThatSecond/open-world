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
var user_entity_1 = require("./user.entity");
var categories_enum_1 = require("../shared/enums/categories.enum");
var profile_entity_1 = require("./profile.entity");
var option_entity_1 = require("./option.entity");
var collection_entity_1 = require("./collection.entity");
var pair_entity_1 = require("./pair.entity");
var Poll = /** @class */ (function () {
    function Poll() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Poll.prototype, "poll_id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Poll.prototype, "question", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Poll.prototype, "thumbnail_url", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Poll.prototype, "caption", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Poll.prototype, "language", void 0);
    __decorate([
        typeorm_1.Column({
            type: "point",
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], Poll.prototype, "geo_point", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Poll.prototype, "location", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: categories_enum_1.CATEGORIES,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Poll.prototype, "category", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "visibile_options_count", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "desired_votes_count", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            nullable: true,
        }),
        __metadata("design:type", Date)
    ], Poll.prototype, "release_date", void 0);
    __decorate([
        typeorm_1.Column({
            type: "jsonb",
            array: false,
            nullable: true,
        }),
        __metadata("design:type", Array)
    ], Poll.prototype, "audience_age_groups", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        typeorm_1.Column("varchar", {
            array: true,
            nullable: true,
        }),
        __metadata("design:type", Array)
    ], Poll.prototype, "audience_genders", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            array: true,
            nullable: true,
        }),
        __metadata("design:type", Array)
    ], Poll.prototype, "audience_educations", void 0);
    __decorate([
        typeorm_1.Column("varchar", {
            array: true,
            nullable: true,
        }),
        __metadata("design:type", Array)
    ], Poll.prototype, "audience_locations", void 0);
    __decorate([
        typeorm_1.Column({
            default: false,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], Poll.prototype, "is_analytics_poll", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Poll.prototype, "has_anonymous_vote", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Poll.prototype, "is_private", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Poll.prototype, "is_familiarity_required", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Poll.prototype, "is_draft", void 0);
    __decorate([
        typeorm_1.Column({
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], Poll.prototype, "is_hidden", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Boolean)
    ], Poll.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Poll.prototype, "votes_count", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, function (user) { return user.polls; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "creator_id",
        }),
        __metadata("design:type", user_entity_1.User)
    ], Poll.prototype, "creator", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, function (profile) { return profile.polls; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Poll.prototype, "profile", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return collection_entity_1.Collection; }, function (collection) { return collection.polls; }, {
            nullable: true,
        }),
        typeorm_1.JoinColumn({
            name: "collection_id",
        }),
        __metadata("design:type", collection_entity_1.Collection)
    ], Poll.prototype, "collection", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return option_entity_1.Option; }, function (option) { return option.poll; }),
        __metadata("design:type", Array)
    ], Poll.prototype, "options", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return pair_entity_1.Pair; }, function (pair) { return pair.poll; }),
        __metadata("design:type", Array)
    ], Poll.prototype, "pairs", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Poll.prototype, "created_at", void 0);
    Poll = __decorate([
        typeorm_1.Entity("polls"),
        typeorm_1.Check("check_null_profile_id_or_collection", "(profile_id is not null and collection_id is null) or (profile_id is null and collection_id is not null)")
    ], Poll);
    return Poll;
}());
exports.Poll = Poll;
//# sourceMappingURL=poll.entity.js.map