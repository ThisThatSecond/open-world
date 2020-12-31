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
var user_entity_1 = require("./user.entity");
var SurveyCampaign = /** @class */ (function () {
    function SurveyCampaign() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", Object)
    ], SurveyCampaign.prototype, "survey_campaign_id", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.ManyToOne(function () { return survey_entity_1.Survey; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "survey_id",
        }),
        __metadata("design:type", survey_entity_1.Survey)
    ], SurveyCampaign.prototype, "survey", void 0);
    __decorate([
        typeorm_1.Column({
            nullable: false,
        }),
        __metadata("design:type", String)
    ], SurveyCampaign.prototype, "name", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return user_entity_1.User; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "creator_id",
        }),
        __metadata("design:type", user_entity_1.User)
    ], SurveyCampaign.prototype, "creator", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], SurveyCampaign.prototype, "created_at", void 0);
    SurveyCampaign = __decorate([
        typeorm_1.Entity("survey_campaigns"),
        typeorm_1.Unique('unique_survey_campaign_name', ["survey", "name"])
    ], SurveyCampaign);
    return SurveyCampaign;
}());
exports.SurveyCampaign = SurveyCampaign;
//# sourceMappingURL=survey_campaigns.entity.js.map