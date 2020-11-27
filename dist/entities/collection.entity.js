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
var profile_entity_1 = require("./profile.entity");
var user_entity_1 = require("./user.entity");
var poll_entity_1 = require("./poll.entity");
var categories_enum_1 = require("../shared/enums/categories.enum");
var Collection = /** @class */ (function () {
    function Collection() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Collection.prototype, "collection_id", void 0);
    __decorate([
        typeorm_1.Index() // is it needed?
        ,
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Collection.prototype, "title", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Collection.prototype, "thumbnail_url", void 0);
    __decorate([
        typeorm_1.Index() // is it needed?
        ,
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Collection.prototype, "caption", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: categories_enum_1.CATEGORIES,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Collection.prototype, "category", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Collection.prototype, "location", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Collection.prototype, "language", void 0);
    __decorate([
        typeorm_1.Column({
            type: "point",
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], Collection.prototype, "geo_point", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Collection.prototype, "desired_responses_count", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            nullable: true,
        }),
        __metadata("design:type", Date)
    ], Collection.prototype, "release_date", void 0);
    __decorate([
        typeorm_1.Column({
            default: true,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], Collection.prototype, "is_draft", void 0);
    __decorate([
        typeorm_1.Column({
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], Collection.prototype, "is_hidden", void 0);
    __decorate([
        typeorm_1.Column({
            default: true,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], Collection.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.Column({
            default: false,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], Collection.prototype, "is_private", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Collection.prototype, "votes_count", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Collection.prototype, "responses_count", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Collection.prototype, "complete_responses_count", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Collection.prototype, "comments_count", void 0);
    __decorate([
        typeorm_1.OneToMany(function () { return poll_entity_1.Poll; }, function (poll) { return poll.collection; }),
        __metadata("design:type", Array)
    ], Collection.prototype, "polls", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, function (profile) { return profile.polls; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Collection.prototype, "profile", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, function (user) { return user.polls; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "creator_id",
        }),
        __metadata("design:type", user_entity_1.User)
    ], Collection.prototype, "creator", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Collection.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            nullable: true,
        }),
        __metadata("design:type", Date)
    ], Collection.prototype, "finalized_at", void 0);
    __decorate([
        typeorm_1.Column({
            type: "jsonb",
            array: false,
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], Collection.prototype, "extra", void 0);
    Collection = __decorate([
        typeorm_1.Entity("collections"),
        typeorm_1.Check("check_requirements", "\n        is_draft or ( \n          title is not null and\n          desired_responses_count > 0 and\n          location is not null and\n          language is not null and\n          geo_point is not null\n        )\n    "),
        typeorm_1.Check("check_collection_finalized", "(is_draft and finalized_at is null) or (not is_draft and finalized_at is not null)"),
        typeorm_1.Check("check_collection_responses_count", "responses_count <= desired_responses_count and responses_count >= 0"),
        typeorm_1.Check("check_collection_complete_responses_count", "complete_responses_count <=  responses_count and complete_responses_count >= 0"),
        typeorm_1.Check("check_collection_comments_count", "comments_count >=  0")
    ], Collection);
    return Collection;
}());
exports.Collection = Collection;
//# sourceMappingURL=collection.entity.js.map