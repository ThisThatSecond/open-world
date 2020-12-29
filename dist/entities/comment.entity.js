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
var survey_entity_1 = require("./survey.entity");
var survey_campaigns_entity_1 = require("./survey_campaigns.entity");
var Comment = /** @class */ (function () {
    function Comment() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], Comment.prototype, "comment_id", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], Comment.prototype, "text", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return survey_entity_1.Survey; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "survey_id",
        }),
        __metadata("design:type", survey_entity_1.Survey)
    ], Comment.prototype, "survey", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "creator_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Comment.prototype, "creator", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "sharing_profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Comment.prototype, "sharing_profile", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return survey_campaigns_entity_1.SurveyCampaign; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "campaign_id",
        }),
        __metadata("design:type", survey_campaigns_entity_1.SurveyCampaign)
    ], Comment.prototype, "survey_campaign", void 0);
    __decorate([
        typeorm_1.Column({
            default: false,
        }),
        __metadata("design:type", Boolean)
    ], Comment.prototype, "is_hidden", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Comment.prototype, "upvotes_count", void 0);
    __decorate([
        typeorm_1.Column({
            default: 0,
        }),
        __metadata("design:type", Number)
    ], Comment.prototype, "downvotes_count", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Comment.prototype, "created_at", void 0);
    Comment = __decorate([
        typeorm_1.Entity("comments")
    ], Comment);
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.entity.js.map