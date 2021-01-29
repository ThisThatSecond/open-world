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
var survey_entity_1 = require("./survey.entity");
var survey_thumbnail_entity_1 = require("./survey_thumbnail.entity");
var user_entity_1 = require("./user.entity");
var TrackableLink = /** @class */ (function () {
    function TrackableLink() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", Object)
    ], TrackableLink.prototype, "trackable_link_id", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.ManyToOne(function () { return survey_entity_1.Survey; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "survey_id",
        }),
        __metadata("design:type", survey_entity_1.Survey)
    ], TrackableLink.prototype, "survey", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], TrackableLink.prototype, "link", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.ManyToOne(function () { return survey_thumbnail_entity_1.SurveyThumbnail; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "survey_thumbnail_id",
        }),
        __metadata("design:type", survey_thumbnail_entity_1.SurveyThumbnail)
    ], TrackableLink.prototype, "survey_thumbnail", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], TrackableLink.prototype, "campaign_name", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "user_id",
        }),
        __metadata("design:type", user_entity_1.User)
    ], TrackableLink.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "creator_id",
        }),
        __metadata("design:type", user_entity_1.User)
    ], TrackableLink.prototype, "creator", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], TrackableLink.prototype, "created_at", void 0);
    TrackableLink = __decorate([
        typeorm_1.Entity("trackable_links"),
        typeorm_1.Check("trackable_link_campaign_or_user", "(campaign_name is not null and user_id is null) or (campaign_name is null and user_id is not null) "),
        typeorm_1.Unique("unique_tl_survey_campaign", ["survey", "campaign_name"]),
        typeorm_1.Unique("unique_tl_survey_user", ["survey", "user"])
    ], TrackableLink);
    return TrackableLink;
}());
exports.TrackableLink = TrackableLink;
//# sourceMappingURL=trackable_link.entity.js.map