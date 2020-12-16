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
var collection_entity_1 = require("./collection.entity");
var poll_entity_1 = require("./poll.entity");
var survey_types_enum_1 = require("../shared/enums/survey_types.enum");
var Survey = /** @class */ (function () {
    function Survey() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Survey.prototype, "survey_id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Survey.prototype, "thumbnail_url", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Survey.prototype, "context", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: categories_enum_1.CATEGORIES,
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Survey.prototype, "category", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Survey.prototype, "language", void 0);
    __decorate([
        typeorm_1.Column({
            type: "point",
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], Survey.prototype, "geo_point", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Survey.prototype, "location", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", Number)
    ], Survey.prototype, "desired_responses_count", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            nullable: true,
        }),
        __metadata("design:type", Date)
    ], Survey.prototype, "release_date", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], Survey.prototype, "is_analytics_survey", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], Survey.prototype, "is_private", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], Survey.prototype, "is_draft", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], Survey.prototype, "is_hidden", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            default: true,
        }),
        __metadata("design:type", Boolean)
    ], Survey.prototype, "is_active", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], Survey.prototype, "ready_to_post", void 0);
    __decorate([
        typeorm_1.Column({
            type: "enum",
            enum: survey_types_enum_1.SurveyTypes,
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Survey.prototype, "type", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return collection_entity_1.Collection; }, function (collection) { return collection.survey; }),
        __metadata("design:type", collection_entity_1.Collection)
    ], Survey.prototype, "collection", void 0);
    __decorate([
        typeorm_1.OneToOne(function () { return poll_entity_1.Poll; }, function (poll) { return poll.survey; }),
        __metadata("design:type", poll_entity_1.Poll)
    ], Survey.prototype, "poll", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, function (user) { return user.surveys; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "creator_id",
        }),
        __metadata("design:type", user_entity_1.User)
    ], Survey.prototype, "creator", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, function (profile) { return profile.surveys; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Survey.prototype, "profile", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Survey.prototype, "votes_count", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Survey.prototype, "responses_count", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Survey.prototype, "complete_responses_count", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Survey.prototype, "comments_count", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Survey.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            nullable: true,
        }),
        __metadata("design:type", Date)
    ], Survey.prototype, "finalized_at", void 0);
    __decorate([
        typeorm_1.Column({
            type: "jsonb",
            array: false,
            nullable: true,
        }),
        __metadata("design:type", Object)
    ], Survey.prototype, "extra", void 0);
    Survey = __decorate([
        typeorm_1.Entity("surveys"),
        typeorm_1.Check("check_survey_finalized", "(is_draft and finalized_at is null) or (not is_draft and finalized_at is not null)"),
        typeorm_1.Check("check_survey_scheduled", "release_date is null or is_draft or ready_to_post"),
        typeorm_1.Check("check_survey_votes_count", "votes_count >= 0"),
        typeorm_1.Check("check_survey_responses_count", "responses_count <= desired_responses_count and responses_count >= 0 and responses_count <= votes_count"),
        typeorm_1.Check("check_survey_complete_responses_count", "complete_responses_count >=0 and complete_responses_count <= responses_count"),
        typeorm_1.Check("check_survey_comments_count", "comments_count >=  0")
    ], Survey);
    return Survey;
}());
exports.Survey = Survey;
//# sourceMappingURL=survey.entity.js.map