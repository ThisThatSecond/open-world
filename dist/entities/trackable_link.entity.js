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
var trackableLink = /** @class */ (function () {
    function trackableLink() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", Object)
    ], trackableLink.prototype, "trackable_link_id", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.ManyToOne(function () { return survey_entity_1.Survey; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "survey_id",
        }),
        __metadata("design:type", survey_entity_1.Survey)
    ], trackableLink.prototype, "survey", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.ManyToOne(function () { return survey_thumbnail_entity_1.surveyThumbnail; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "survey_thumbnail_id",
        }),
        __metadata("design:type", survey_thumbnail_entity_1.surveyThumbnail)
    ], trackableLink.prototype, "surveyThumbnail", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], trackableLink.prototype, "campaign_name", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: true,
        }),
        __metadata("design:type", String)
    ], trackableLink.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "creator_id",
        }),
        __metadata("design:type", user_entity_1.User)
    ], trackableLink.prototype, "creator", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], trackableLink.prototype, "created_at", void 0);
    trackableLink = __decorate([
        typeorm_1.Entity("trackable_links"),
        typeorm_1.Check("trackable_link_campaign_or_user", "(campaign_name is not null and user_id is null) or (campaign_name is null and user_id is not null) ")
    ], trackableLink);
    return trackableLink;
}());
exports.trackableLink = trackableLink;
//# sourceMappingURL=trackable_link.entity.js.map