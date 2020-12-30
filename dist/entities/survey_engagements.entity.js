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
var profile_entity_1 = require("./profile.entity");
var SurveyEngagement = /** @class */ (function () {
    function SurveyEngagement() {
    }
    __decorate([
        typeorm_1.Index(),
        typeorm_1.PrimaryColumn("uuid"),
        typeorm_1.ManyToOne(function () { return survey_entity_1.Survey; }, function (survey) { return survey.engagements; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "survey_id",
        }),
        __metadata("design:type", survey_entity_1.Survey)
    ], SurveyEngagement.prototype, "survey", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, function (profile) { return profile.engaged_surveys; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], SurveyEngagement.prototype, "profile", void 0);
    __decorate([
        typeorm_1.Column({
            default: false,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], SurveyEngagement.prototype, "has_tracked", void 0);
    __decorate([
        typeorm_1.Column({
            default: false,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], SurveyEngagement.prototype, "has_reaction", void 0);
    __decorate([
        typeorm_1.Column({
            default: false,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], SurveyEngagement.prototype, "has_shared", void 0);
    __decorate([
        typeorm_1.Column({
            default: false,
            nullable: false,
        }),
        __metadata("design:type", Boolean)
    ], SurveyEngagement.prototype, "is_respondent", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], SurveyEngagement.prototype, "created_at", void 0);
    SurveyEngagement = __decorate([
        typeorm_1.Entity("survey_engagements"),
        typeorm_1.Check("check_engagement", "has_tracked or has_reaction or has_shared or is_respondent")
    ], SurveyEngagement);
    return SurveyEngagement;
}());
exports.SurveyEngagement = SurveyEngagement;
//# sourceMappingURL=survey_engagements.entity.js.map