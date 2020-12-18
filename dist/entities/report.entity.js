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
var comment_entity_1 = require("./comment.entity");
var survey_entity_1 = require("./survey.entity");
var Report = /** @class */ (function () {
    function Report() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn("uuid"),
        __metadata("design:type", String)
    ], Report.prototype, "report_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: false }),
        typeorm_1.JoinColumn({
            name: "reporter_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Report.prototype, "reporter", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return comment_entity_1.Comment; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "comment_id",
        }),
        __metadata("design:type", comment_entity_1.Comment)
    ], Report.prototype, "comment", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return survey_entity_1.Survey; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "survey_id",
        }),
        __metadata("design:type", survey_entity_1.Survey)
    ], Report.prototype, "survey", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return profile_entity_1.Profile; }, { nullable: true }),
        typeorm_1.JoinColumn({
            name: "profile_id",
        }),
        __metadata("design:type", profile_entity_1.Profile)
    ], Report.prototype, "profile", void 0);
    __decorate([
        typeorm_1.Column({
            type: "timestamptz",
            default: function () { return "CURRENT_TIMESTAMP"; },
            nullable: false,
        }),
        __metadata("design:type", Date)
    ], Report.prototype, "created_at", void 0);
    Report = __decorate([
        typeorm_1.Entity("reports"),
        typeorm_1.Check("check_comment_or_survey_or_profile_report", "comment_id is not null or survey_id is not null or profile_id is not null"),
        typeorm_1.Unique("unique_reporter_comment", ["reporter", "comment"]),
        typeorm_1.Unique("unique_reporter_poll", ["reporter", "poll"]),
        typeorm_1.Unique("unique_reporter_collection", ["reporter", "collection"]),
        typeorm_1.Unique("unique_reporter_profile", ["reporter", "profile"])
    ], Report);
    return Report;
}());
exports.Report = Report;
//# sourceMappingURL=report.entity.js.map